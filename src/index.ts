import fastify from 'fastify';
import mercurius from 'mercurius';
import schema from './graphql';
import buildContext from './graphql/context';

const app = fastify({ logger: true });

app.register(mercurius, {
  schema,
  context: buildContext,
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();
