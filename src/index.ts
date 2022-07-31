import fastify from 'fastify';
import fastifyHelmet from '@fastify/helmet';
import fastifyCors from '@fastify/cors';
import mercurius from 'mercurius';
import schema from './graphql';
import buildContext from './graphql/context';
import { NoSchemaIntrospectionCustomRule } from 'graphql';

const app = fastify({ logger: true });

app.register(mercurius, {
  schema,
  context: buildContext,
  queryDepth: 4,
  validationRules:
    process.env.NODE_ENV === 'production'
      ? [NoSchemaIntrospectionCustomRule]
      : undefined,
});

app.register(fastifyHelmet);
app.register(fastifyCors, {
  origin: '*',
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
