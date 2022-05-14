import { queryField } from 'nexus';

const helloWorldQuery = queryField((t) => {
  t.field('hello', {
    type: 'String',
    resolve: () => 'world',
  });
});

export const Query = [helloWorldQuery];
