import { ImgurApi } from "./dataSources";

import { buildSchemas } from "./util";
import config from './config.json';
import resolvers from "./resolver";
import { context } from "./context";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";

(async () => {
  const expressApp: Express = express();

  let schema = buildSchemas("src/schema/*.graphql", resolvers);
  // @ts-ignore
  const server = new ApolloServer({
    dataSources: () => ({
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
