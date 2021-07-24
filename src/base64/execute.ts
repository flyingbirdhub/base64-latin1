import { toByteArray, fromByteArray } from 'base64-js';
import { TextDecoderLite, TextEncoderLite } from 'text-encoder-lite';

const encoder = new TextEncoderLite('utf-8').encode;
const decoder = new TextDecoderLite('utf-8').decode;

export function encode(data: string) {
  return fromByteArray(encoder(data));
}

export function decode(data: string) {
  return decoder(toByteArray(data));
}
