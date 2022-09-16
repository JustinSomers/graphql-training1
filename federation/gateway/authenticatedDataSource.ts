import { RemoteGraphQLDataSource } from "@apollo/gateway";

export default class AuthenticatedDataSource extends RemoteGraphQLDataSource {
    /** willSendRequest's logic will run before every request is made to a subgraph.
     * In this case, we will use it to set our username and client-id environment variables
     * and pass them as headers to the client.
     */
     // @ts-ignore
    willSendRequest({ request, context }) {
    request.http.headers.set("x-username", process.env.USERNAME)
    request.http.headers.set("x-client-id", process.env.CLIENT_ID)
  }
}
