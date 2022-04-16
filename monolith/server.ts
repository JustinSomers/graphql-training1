import { loadSchema } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { ApolloServer } from 'apollo-server-express';
import { createComplexityLimitRule } from 'graphql-validation-complexity';
import express from 'express';
import resolvers from './resolver/employee.resolver';
import config from './apolloServerConfig.json';
// import context from './context';

(async () => {
  const app = express();

  const schema = await loadSchema('**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  });
  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers, // "stitched" up resolvers all added to server at once
  });
  const apolloServer = new ApolloServer({
    schema: schemaWithResolvers,
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
