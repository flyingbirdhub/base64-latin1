import { execute } from '@/base64';

onmessage = (e: MessageEvent) => {
  const result = execute(e.data);
  postMessage(result);
};
