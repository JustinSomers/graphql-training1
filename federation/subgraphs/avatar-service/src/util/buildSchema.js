"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const apollo_server_express_1 = require("apollo-server-express");
const load_files_1 = require("@graphql-tools/load-files");
const merge_1 = require("@graphql-tools/merge");
const subgraph_1 = require("@apollo/subgraph");
const buildSchemas = (schemaPath, resolvers) => {
    const typesArray = (0, load_files_1.loadFilesSync)(schemaPath);
    if (typesArray.length <= 0) {
        throw Error(`No schema files found with file glob pattern: ${schemaPath}`);
    }
    const typeDefs = (0, merge_1.mergeTypeDefs)(typesArray);
    const schema = (0, subgraph_1.buildSubgraphSchema)([
        {
            typeDefs: (0, apollo_server_express_1.gql)((0, graphql_1.print)(typeDefs)),
            resolvers,
        },
    ]);
    return schema;
};
exports.default = buildSchemas;
