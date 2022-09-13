import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from '@apollo/subgraph';

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    id: ID!

    username: String
  }
`;

const resolvers = {
  Query: {
    me() {
      return { id: "1", username: "@ava" };
    },
  },
};

let schemaIncrease = buildSubgraphSchema({typeDefs, resolvers});
// @ts-ignore
const server = new ApolloServer({schema: schemaIncrease});

server.listen(4001).then(({ url, port }) => {
  console.log(`🚀 Server ready at ${url}:${port}`);
});
