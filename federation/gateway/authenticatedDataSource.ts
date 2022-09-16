import { RemoteGraphQLDataSource } from "@apollo/gateway";

export default class AuthenticatedDataSource extends RemoteGraphQLDataSource {
    // @ts-ignore
    willSendRequest({ request, context }) {
    request.http.headers.set("x-username", process.env.USERNAME)
    request.http.headers.set("x-client-id", process.env.CLIENT_ID)
  }
}
