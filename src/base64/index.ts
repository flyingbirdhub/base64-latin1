import { encode, decode } from './execute';

export function execute(data: {
  type: string,
  data: string,
}) {
  const result = {
    code: -1,
    message: 'data is not an object',
    data: '',
  };
  if (!data || typeof data !== 'object') {
    return result;
  }

  switch (data.type) {
    case 'decode':
      result.code = 0;
      result.data = decode(data.data)
      break;
    case 'encode':
      result.code = 0;
      result.data = encode(data.data);
      break;
    default:
      result.code = -2;
      result.message = 'data type is not decode or encode';
      break;
  }
  return result;
}
