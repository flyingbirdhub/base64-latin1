jest.mock('web-worker:./worker.ts', () => {
    const worker = {
      postMessage: jest.fn(),
      onmessage: jest.fn(),
      onerror: jest.fn(),
    };
    worker.postMessage.mockImplementation((data) => {
      worker.onmessage(data);
    });
    const Worker = function () {
      return worker;
    };
    return Worker;
});