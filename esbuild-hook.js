const Module = require('node:module');
const { transformSync } = require('esbuild');
const sourceMapSupport = require('source-map-support');

const cache = {};

function esbuildHook(code, filepath) {
    const result = transformSync(code, {
        target: 'node20',
        sourcemap: 'both',
        loader: 'ts',
        format: 'cjs',
        sourcefile: filepath,
    });

    cache[filepath] = {
        url: filepath,
        code: result.code,
        map: result.map,
    };

    return result.code;
}

sourceMapSupport.install({
    environment: 'node',
    retrieveFile(pathOrUrl) {
        const file = cache[pathOrUrl];
        if (file) {
            return file.code;
        }
    },
});

const defaultLoader = Module._extensions['.js'];

Module._extensions['.ts'] = (mod, filename) => {
    if (filename.includes('node_modules')) {
        return defaultLoader(mod, filename);
    }

    const defaultCompile = mod._compile;
    mod._compile = (code) => {
        mod._compile = defaultCompile;
        return mod._compile(esbuildHook(code, filename), filename);
    };

    defaultLoader(mod, filename);
};
