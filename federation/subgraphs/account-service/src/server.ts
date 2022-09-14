import { gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { GraphQLSchema } from "graphql";
import { loadSchema } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

import { ImgurApi } from "./dataSources";

import { buildSchemas } from "./util";
import config from './config.json';
import resolvers from "./resolver";
import { context } from "./context";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";

// async function initServer(): Promise<ApolloServer> {
//   // const schema: GraphQLSchema = await loadSchema('src/schema/*.graphql', {
//   //   loaders: [new GraphQLFileLoader()],
//   // const schemaWithResolvers: GraphQLSchema = addResolversToSchema({
//   //   schema,
//   //   resolvers
//   // });
// }

(async () => {
  const expressApp: Express = express();

  let schema = buildSchemas("src/schema/*.graphql", resolvers);
  // @ts-ignore
  const server = new ApolloServer({
    dataSources: () => ({
      // dataSources should create a new instance of each data source for each operation
      // apollographql.com/docs/apollo-server/data/data-sources/
      imgurApi: new ImgurApi(),
    }),
    introspection: config.introspection,
    schema: schema,
    context,
  });

  await server.start();
  //@ts-ignore
  server.applyMiddleware({
    app: expressApp, path: config.graphQLPath
  });

  const { port } = config;
  expressApp.listen(({ port }), () => {
    console.log(
      `🚀 Apollo Server AccountService API launched at: http://localhost:${port}${server.graphqlPath}`
    );
  });
})();

// initServer().then((server) => {
//   server.listen(4001).then(({ url, port }) => {
//     console.log(`🚀 Server ready at ${url}:${port}`);
//   });
// });
