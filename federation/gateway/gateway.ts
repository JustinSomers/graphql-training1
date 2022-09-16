// Main
import 'dotenv/config';
import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import  AuthenticatedDataSource from './authenticatedDataSource'


const config = {
  buildService({url}) {
    //Lets initialize our datasource we just created
    return new AuthenticatedDataSource({url})
  },
  //additions 2
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      // { name: "update-me-service", url: "http://localhost:4001/graph" },
    ],
    introspectionHeaders: {
      Authorization: "Bearer abc123",
    },
  }),
};
// @ts-ignore
const gateway = new ApolloGateway(config);

function startApolloServer() {
  const server = new ApolloServer({
    gateway
  });
  return server;
}

let server = startApolloServer();

server.listen().then(({ url, port }) => {
  console.log(`🚀 Server ready at ${url}`);
});
