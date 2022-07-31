import { makeSchema } from 'nexus';
import { join } from 'path';
import { Query } from './query';

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/typings.ts',
  },
  contextType: {
    module: join(process.cwd(), 'src/graphql/context/index.ts'),
    export: 'Context',
  },
  shouldExitAfterGenerateArtifacts: Boolean(
    process.env.NEXUS_SHOULD_EXIT_AFTER_REFLECTION,
  ),
});

export default schema;
