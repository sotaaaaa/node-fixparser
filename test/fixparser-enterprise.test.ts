import { TLSSocket, connect } from 'node:tls';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { ProxyAgent } from 'proxy-agent';
import WebSocket from 'ws';

import { Socket } from 'node:net';
import { FIXParser } from '../src/FIXParser';
import { mockLicense } from './setup';

jest.mock('proxy-agent');
const mockProxyAgent = ProxyAgent as jest.MockedClass<typeof ProxyAgent>;

jest.mock('ws');
const mockWebSocket = WebSocket as jest.MockedClass<typeof WebSocket>;

jest.mock('node:tls');
const mockTLSConnect = connect as jest.MockedFunction<typeof connect>;
const mockTLSSocket = TLSSocket as jest.MockedClass<typeof TLSSocket>;

const mockTLSSocketSetEncoding = jest.fn();
mockTLSSocket.prototype.setEncoding = mockTLSSocketSetEncoding;

const mockTLSSocketPipe = jest.fn().mockReturnValue(() => null);
mockTLSSocketPipe.mockReturnValue(new mockTLSSocket(new Socket(), {}));
mockTLSSocket.prototype.pipe = mockTLSSocketPipe;

mockTLSConnect.mockReturnValue(new mockTLSSocket(new Socket(), {}));

describe('FIXParser', () => {
    describe('#connect', () => {
        it('without license', () => {
            mockLicense.mockReturnValue(false);
            const fixParserInstance1: FIXParser = new FIXParser();
            fixParserInstance1.connect({
                host: 'localhost',
                port: 9800,
                protocol: 'websocket',
            });
            expect(mockLicense).toHaveBeenCalled();
            mockLicense.mockReturnValue(true);
        });

        it('using protocol prefix', () => {
            const fixParserInstance2: FIXParser = new FIXParser();
            const hostWithPrefix: string = 'wss://localhost';
            fixParserInstance2.connect({
                host: hostWithPrefix,
                port: 9800,
                protocol: 'websocket',
            });
            expect(mockWebSocket).toHaveBeenCalledWith('wss://localhost:9800');
        });

        it('using proxy', () => {
            const fixParserInstance3: FIXParser = new FIXParser();
            const proxyURL: string = 'wss://localhostproxy';

            fixParserInstance3.connect({
                host: 'localhost',
                port: 9800,
                protocol: 'websocket',
                proxy: new ProxyAgent({ httpsAgent: new HttpsProxyAgent(proxyURL) }),
            });

            expect(mockProxyAgent).toHaveBeenCalled();
            expect(mockWebSocket).toHaveBeenCalledWith('ws://localhost:9800', {
                agent: mockProxyAgent.mock.instances[0],
            });
        });

        it('using tls-tcp', () => {
            const fixParserInstance3: FIXParser = new FIXParser();

            fixParserInstance3.connect({
                host: 'localhost',
                port: 9800,
                protocol: 'tls-tcp',
                tlsKey: 'someKey',
                tlsCert: 'someCert',
            });

            expect(mockTLSSocketSetEncoding).toHaveBeenCalledWith('utf8');
            expect(mockTLSSocketSetEncoding).toHaveBeenCalledTimes(1);
            expect(mockTLSConnect).toHaveBeenCalledWith(
                9800,
                'localhost',
                {
                    cert: 'someCert',
                    key: 'someKey',
                    host: 'localhost',
                    port: 9800,
                    rejectUnauthorized: false,
                },
                expect.any(Function),
            );
        });

        it('using tls-tcp with SNI', () => {
            const fixParserInstance3: FIXParser = new FIXParser();

            fixParserInstance3.connect({
                host: 'localhost',
                port: 9800,
                protocol: 'tls-tcp',
                tlsKey: 'someKey',
                tlsCert: 'someCert',
                tlsUseSNI: true,
            });

            expect(mockTLSSocketSetEncoding).toHaveBeenCalledWith('utf8');
            expect(mockTLSSocketSetEncoding).toHaveBeenCalledTimes(1);
            expect(mockTLSConnect).toHaveBeenCalledWith(
                9800,
                'localhost',
                {
                    cert: 'someCert',
                    key: 'someKey',
                    host: 'localhost',
                    port: 9800,
                    rejectUnauthorized: false,
                    servername: 'localhost',
                },
                expect.any(Function),
            );
        });
    });
});
