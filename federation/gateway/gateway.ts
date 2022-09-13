// Main
import 'dotenv/config';
import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import  AuthenticatedDataSource from './authenticatedDataSource'
// const port = process.env.APOLLO_PORT || 4000;
// const embeddedSchema = process.env.APOLLO_SCHEMA_CONFIG_EMBEDDED == "true" ? true : false;

const config = {
  //additons 1 - add buildServices
  // add buildService
  buildService({url}) {
    // now we will create an authenticated DataSource
    return new AuthenticatedDataSource({url})
  },
  //additions 2
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "account-service", url: "http://localhost:4001/" },
    //   { name: "reviews", url: "https://reviews-service.dev/graphql" },
    ],
    introspectionHeaders: {
      Authorization: "Bearer abc123",
    },
  }),
};
const plugins = [];

// @ts-ignore
const gateway = new ApolloGateway(config);

function startApolloServer() {
  const server = new ApolloServer({
    gateway,
    // // @ts-ignore
    // debug: true,
    // // Subscriptions are unsupported but planned for a future Gateway version.
    // subscriptions: false,
    // plugins,
  });

  return server;
}

let server = startApolloServer();

server.listen().then(({ url, port }) => {
  console.log(`🚀 Server ready at ${url}`);
});
