const server = Deno.serve({
  hostname: "localhost",
  port: 0,
  onListen: ({ hostname, port }) => {
    fetch(`http://${hostname}:${port}`)
      .then((res) => res.text())
      .then((body) => console.info(body))
      .finally(() => server.shutdown());
  },
}, (req) => new Response("OK"));
