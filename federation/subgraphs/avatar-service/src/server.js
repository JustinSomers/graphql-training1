"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataSources_1 = require("./dataSources");
const util_1 = require("./util");
const config_json_1 = __importDefault(require("./config.json"));
const resolver_1 = __importDefault(require("./resolver"));
const context_1 = require("./context");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
// async function initServer(): Promise<ApolloServer> {
//   // const schema: GraphQLSchema = await loadSchema('src/schema/*.graphql', {
//   //   loaders: [new GraphQLFileLoader()],
//   // const schemaWithResolvers: GraphQLSchema = addResolversToSchema({
//   //   schema,
//   //   resolvers
//   // });
// }
(() => __awaiter(void 0, void 0, void 0, function* () {
    const expressApp = (0, express_1.default)();
    let schema = (0, util_1.buildSchemas)("src/schema/*.graphql", resolver_1.default);
    // @ts-ignore
    const server = new apollo_server_express_1.ApolloServer({
        dataSources: () => ({
            // dataSources should create a new instance of each data source for each operation
            // apollographql.com/docs/apollo-server/data/data-sources/
            imgurApi: new dataSources_1.ImgurApi(),
        }),
        introspection: config_json_1.default.introspection,
        schema: schema,
        context: context_1.context,
    });
    yield server.start();
    //@ts-ignore
    server.applyMiddleware({
        app: expressApp, path: config_json_1.default.graphQLPath
    });
    const { port } = config_json_1.default;
    expressApp.listen(({ port }), () => {
        console.log(`🚀 Apollo Server AccountService API launched at: http://localhost:${port}${server.graphqlPath}`);
    });
}))();
// initServer().then((server) => {
//   server.listen(4001).then(({ url, port }) => {
//     console.log(`🚀 Server ready at ${url}:${port}`);
//   });
// });
