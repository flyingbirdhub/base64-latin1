import Worker from 'web-worker:./worker.ts';

const worker = new Worker();

export async function decoder(data: string) {
  return await exec({
    type: 'decode',
    data,
  });
}

export async function encoder(data: string) {
  return await exec({
    type: 'encode',
    data,
  });
}

function exec(data) {
  const promise = new Promise<string>((resolve, reject) => {
    worker.onmessage = (e) => {
      if(e.data.code !== 0) {
        reject(e.data.message);
      } else {
        resolve(e.data.data);
      }
    };
    worker.onerror = (e) => {
      reject(e);
    };
    worker.postMessage(data);
  });
  return promise;
}
