import fastify from 'fastify';

const app = fastify({ logger: true });

const start = async () => {
  try {
    await app.listen(3000);
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();
