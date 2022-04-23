import 'dotenv/config';
import { loadSchema } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { ApolloServer } from 'apollo-server-express';
import { createComplexityLimitRule } from 'graphql-validation-complexity';
import express from 'express';

import resolvers from '@monolith/resolver';
import config from '@monolith/apolloServerConfig.json';
import ImgurApi from '@monolith/imgurApiClient';
import context from '@monolith/context';

(async () => {
  const expressApp = express();

  const schema = await loadSchema('**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  });
  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
  });
  const apolloServer = new ApolloServer({
    dataSources: () => ({
      // dataSources should create a new instance of each data source for each operation
      // apollographql.com/docs/apollo-server/data/data-sources/
      imgurApi: new ImgurApi(),
    }),
    // resolvers must be imported with schema when using loadSchema helper function
    schema: schemaWithResolvers,
    introspection: config.introspection,
    validationRules: [createComplexityLimitRule(config.operationComplexityLimit)],
    context,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: expressApp, path: config.graphQLPath });

  const { port } = config;
  expressApp.listen({ port }, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Apollo Server v3 GraphQL API launched at: http://localhost:${port}${apolloServer.graphqlPath}`);
  });
})();
