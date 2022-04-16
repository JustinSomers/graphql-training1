import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

(async function () {
const schema = await loadSchema('**/*.graphql', {
  loaders: [new GraphQLFileLoader()]
});
const server = new ApolloServer({
  schema,
});

const port = 4000;
const app = express();
await server.start();

server.applyMiddleware({ app });
app.listen({ port }, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Apollo Server v3 GraphQL API launched at: http://localhost:${port}${server.graphqlPath}`);
});
})();