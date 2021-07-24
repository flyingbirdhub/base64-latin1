import { encode, decode } from '@/base64/execute';
import { toByteArray, fromByteArray } from 'base64-js';
import { TextDecoderLite, TextEncoderLite } from 'text-encoder-lite';

jest.mock('base64-js', () => ({
    toByteArray: jest.fn(),
    fromByteArray: jest.fn(),
}));

jest.mock('text-encoder-lite', () => {
    const decode = jest.fn();
    function TextDecoderLite() {
        return {
            decode,
        };
    }
    const encode = jest.fn();
    function TextEncoderLite() {
        return {
            encode,
        };
    }
    return {
        TextDecoderLite,
        TextEncoderLite,
    };
});

describe('tests for execute.ts', () => {
    it('encode, fromByteArray and encoder should be called', () => {
        encode('');
        expect(fromByteArray).toHaveBeenCalled();
        const encoder = new TextEncoderLite();
        expect(encoder.encode).toHaveBeenCalled();
    });
    it('decode, decoder and toByteArray should be callled', () => {
        decode('');
        expect(toByteArray).toHaveBeenCalled();
        const decoder = new TextDecoderLite();
        expect(decoder.decode).toHaveBeenCalled();
    });
});

