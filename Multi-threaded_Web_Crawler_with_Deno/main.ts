const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
  type: "module",
});

worker.postMessage({ url: "https://github.com/fullzer4" });
worker.postMessage({ url: "https://github.com/brunobandeiraf" })
