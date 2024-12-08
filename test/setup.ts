import MockDate from 'mockdate';
import { LicenseManager } from '../src/licensemanager/LicenseManager';
MockDate.set(1629064307365);

jest.mock('../src/licensemanager/LicenseManager');
export const mockLicense = LicenseManager.validateLicense as jest.Mock;
mockLicense.mockReturnValue(true);
