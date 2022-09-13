import { RemoteGraphQLDataSource } from "@apollo/gateway";

export default class AuthenticatedDataSource extends RemoteGraphQLDataSource {
    // @ts-ignore
    willSendRequest({ request, context }) {
      console.log(context);
    request.http.headers.set("Authorization", 'Bearer abc123');
    request.http.headers.set("Username", process.env.USERNAME)
  }
}
