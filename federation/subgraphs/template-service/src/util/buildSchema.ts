import { GraphQLSchema, print } from 'graphql';
import { gql } from 'apollo-server-express';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { buildSubgraphSchema } from '@apollo/subgraph';

const buildSchemas = (schemaPath: string, resolvers: any): GraphQLSchema => {
    const typesArray = loadFilesSync(schemaPath);
    if (typesArray.length <= 0) {
      throw Error(`No schema files found with file glob pattern: ${schemaPath}`);
    }
    const typeDefs = mergeTypeDefs(typesArray);
    const schema = buildSubgraphSchema([
      {
        typeDefs: gql(print(typeDefs)),
        resolvers,
      },
    ]);
    return schema;
  };

export default buildSchemas;