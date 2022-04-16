import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { ApolloServer } from 'apollo-server-express';
import { createComplexityLimitRule } from 'graphql-validation-complexity';
import config from './apolloServerConfig.json';
import express from 'express';

(async () => {
  const app = express();

  const schema = await loadSchema('**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  });
  const apolloServer = new ApolloServer({
    schema,
    introspection: config.introspection,
    validationRules: [createComplexityLimitRule(config.operationComplexityLimit)],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: config.graphQLPath, });

  const port = config.port;
  app.listen({ port }, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Apollo Server v3 GraphQL API launched at: http://localhost:${port}${apolloServer.graphqlPath}`);
  });
})();
