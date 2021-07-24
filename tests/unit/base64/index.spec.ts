import { execute } from '@/base64';

import { encode, decode } from '@/base64/execute';

jest.mock('@/base64/execute', () => ({
    encode: jest.fn(),
    decode: jest.fn(),
}));

describe('tests for base64', () => {
    it('data is not object, should return -1', () => {
        const result = execute('' as any);
        expect(result.code).toEqual(-1);
    });
    it('data is object, but type is error, should return -2', () => {
        const result = execute({
            type: '',
            data: '',
        });
        expect(result.code).toEqual(-2);
    });
    it('data is object, and type decode, decode method should be called', () => {
        const result = execute({
            type: 'decode',
            data: '',
        });
        expect(decode).toHaveBeenCalled();
    });
    it('data is object, and type encode, encode method should be called', () => {
        const result = execute({
            type: 'encode',
            data: '',
        });
        expect(encode).toHaveBeenCalled();
    });
});
