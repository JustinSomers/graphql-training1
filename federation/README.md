# Federation Training


## First Steps
* Go ahead and signup to Apollo Studio if you haven't already. [Link Here to Signup](http://studio.apollographql.com)
* Create a new [graph](https://www.apollographql.com/docs/studio/getting-started/#2-create-your-first-graph)
    * Enter your graph name, organization name (if your first graph) and specify Supergraph (default) for Graph Architecture
![Example Graph](../assets/federation/setupGraph.png)
* Next, you'll be asked to publish your schema.  In this step, please select Federation 2 for your pipeline track.  Then go ahead and select "finish later".
    * Do copy the command provided to publish the schema as shown.  We won't use it, but we will want to save the APOLLO_KEY variable to your terminal profile properties laer.
![Example PublishSchema](../assets/federation/publishSchema.png)

From here, you will see we can publish our schemas to our registered subgraph in Apollo.  This will be done with the `rover subgraph publish` command, where we will publish each subgraph to the schema.  This will always need to be done atleast once for each new federated graph you do and can be automated with a configured automated pipeline.  For this project however, we will stick to using `rover subgraph publish` to make changes to our schemas.

## Setting up the Gateway
Next, go ahead and create a `gateway` subfolder.  Here we will place the code for our gateway.  The gateway acts as a router for all federated graphql requests, requests come in to this endpoint and it will then route each request to the proper subgraph(s).

* Run `npm init` in the `gateway` subfolder, and add the properties you would like (I would recommend specifying `gateway.ts` as your main entrance point, you can edit this later in the package.json if you would like)
* Run `npm install @apollo/gateway apollo-server graphql` to install the gateway, apollo-server, and graphql dependencies.
* Go ahead and import `import { ApolloGateway } from '@apollo/gateway';` and then initialize the gateway with an empty config object (we can add more config settings later).

## Auth
Add Bearer [access-token]

## Starting the Applications
Each service and your gateway will need to be ran at the same time.  Locally, this can be accomplished by manually running them all at the same time with your `yarn start` commmand, which will run the `start` script located in your `package.json` for each service.  You can also look into using docker and docker-compose to build containers of each of your services and the gateway, and then docker-compose will be used to spin up all the containers at once.  For this course however, we will use a script, `startfed` located in the root of the federation directory.

To use the script, run `chmod +x` on mac / linux machines to add the executable permission to the script.  Then you can type `./startfed` in the root of the federation folder to run the script


## Developing the Gateway
First we will create a config object.

Lets start building the subgraph services.  This seciton will create a introspection query - that will send a request to all the specified subgraphs and build the required information to the gateway.
Lets add this line to the config object:
```
buildService({ name, url }) {
    return new AuthenticatedDataSource({ url });
  },
```
This will build each service.  But first, we will need to also create a new class - AuthenticatedDAtaSource.  Lets create a new file - `authenticatedDataSource.ts` in the root of the `/gateway` folder.

Go ahead and paste the following in the `authenticatedDataSource.ts` file.
```
    import { RemoteGraphQLDataSource } from "@apollo/gateway";

    class AuthenticatedDataSource extends RemoteGraphQLDataSource {
        // @ts-ignore
        willSendRequest({ request, context }) {
        request.http.headers.set("x-user-id", context.userId);
    }
    }
```

As you can see, we are extending the RemoteGraphQLDataSource object, here we can add custom logic for our data sources.  Most commonly these classes edit the logic for `willSendRequest` and `didReceiveResponse`.

### willSendRequest
Override this method in a subclass to modify each outgoing fetch request before it's sent to the subgraph:
This method takes a requestContext object that contains both the original unmodified request and the current context.

### didReceiveReponse
Override this method in a subclass to customize the gateway's behavior after it completes a fetch to the subgraph, but before it sends a response to the requesting client
This method takes a requestContext object that contains:

* The subgraph's response
* The gateway's request to the subgraph
* The current operation's context
This enables you to modify any combination of the operation's context and the response of the fetch.

The http property of the request and response objects contains additional HTTP-specific properties, such as headers.

This method must return an object that matches the structure of a GraphQLResponse. If no modifications are necessary, return the original response.
Source: https://www.apollographql.com/docs/federation/api/apollo-gateway/#class-remotegraphqldatasource

### Service Library
As you'll notice we are copying the same files to each subgraph.  A best practice would be to seperate these repeated sections of code into a service-library.  When doing so in a professional environment, you'll want to ensure your package.json references the correct version numbers, and that the package-lock.json (or yarn.lock) all require the same graphql versions.  Howver, to reduce complexity for this project, we will simply copy the repeating files to each new subgraph.


### Setup the Avatar Service
Now that you've finished the account-service, lets go ahead and create the Avatar service.  Go ahead and copy the template-service.  From there, you'll want to update the `config.json` file.  Then, go ahead and create a new resolver, `avatar.resolver.ts`.  Make sure to import this into `/resolvers/index.ts` and remove the `account.resolver.ts` refernce.  We will also copy the `avatar.service.ts` services from the monolith into the `/service` directory.

In both of these two files (`avatar.resolver.ts`, `avatar.service.ts`) we will want to update the file path of typings.  Go ahead and update the import import: `import {
    Account, QueryAccountArgs, Resolvers, User,
  } from '../graphqlTypes';` to:

  ```
  import {
    Account, QueryAccountArgs, Resolvers, User,
  } from '../typings/graphqlTypes';
  ```
If you haven't already.  Note: The imported types will change as you update your resolver and services to use different types.


 From there, we will copy the schema form the monolith for avatar.  Go ahead and copy `avatar.graphql` from the monolith over to `/schema/avatar.graphql` in the avatar-service.


With the avatar.graphql service added, now lets enable federation 2 support.  To do this, create a new file in the `/schema/` directory, `fed2.graphql`.  From there, go ahead and paste the following into the the `fed2.graphql` file:

```
# Required for all subgraph schemas
scalar link__Import

directive @link(
  url: String!,
  import: [link__Import],
) repeatable on SCHEMA

# Required if the corresponding directive is used
directive @shareable on FIELD_DEFINITION | OBJECT

extend schema
  @link(url: "https://specs.apollo.dev/federation/v2.0",
        import: ["@key", "@shareable", "@external"])
```
This allow us to use the various keywords, such as @key, @shareable, and @external.  There are more of these available, such as `@tag` and a few others.  We will get into these later.

Finally, assuming your application runs with `npm start`, we will want to add this to the gateway.  Go back to your `gateway.ts` file under the `federation` folder.  Go ahead and add this line:
```
      { name: "avatar-service", url: "http://localhost:4002/graph" },
```
to the `subgraphs` array resulting in this block of code:
```
 supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "account-service", url: "http://localhost:4001/graph" },
      { name: "avatar-service", url: "http://localhost:4002/graph" },
    ],
    introspectionHeaders: {
      Authorization: "Bearer abc123",
    },
  }),
```
Make sure that your port in the `url` matches up with the port specified in the `avatar-service`'s `config.json` for port.

### Starting a New Subgraph
Go ahead and copy the Avatar Service again, and update the `config.json`, update the `.graphql` files and more.  Once your service is up and running, update the `federation.json` file to add your service.  Then, add your service to the gateway's `gateway.ts` file, at the `subgraphs:` array.  Make sure the url includes the updated port that matches your `config.json` file.
```
      { name: "viewer-service", url: "http://localhost:4003/graph" },
```

### Example Service
In the Example Service we will give examples of various federation-specific directives you can use.  Some of these examples include @tag, @shareable, and @external.  To use these tags, in the `fed2.graphql` file, you will need to add the directive to the import statement:
```
import: ["@key", "@shareable", "@external", "@tag"])
```

@tag allows us to create Contracts - which we can chose to create federated graphs that include these tags, or exclude these tags.  This can be useful to create subgraphs that you limit the scope of.  A great example of this is creating a contract with a vendor's name to limit access to the graph for only what the vendor needs. 

@shareable is used when a field can be resolved across multiple subgraphs.  For example, if the type with the @shareable field - we can have this field show up in multilpe subgraphs.  The subgraph will need to resolve that field however.

@external - Indicates that this subgraph usually can't resolve a particular object field, but it still needs to define that field for other purposes.

This directive is always used in combination with another directive that references object fields, such as @provides or @requires.

@provides - Specifies a set of entity fields that a subgraph can resolve, but only at a particular schema path (at other paths, the subgraph can't resolve those fields).

If a subgraph can always resolve a particular entity field, do not apply this directive.

Using this directive is always an optional optimization. It can reduce the total number of subgraphs that your graph router needs to communicate with to resolve certain operations, which can improve performance.

@requires
Indicates that the resolver for a particular entity field depends on the values of other entity fields that are resolved by other subgraphs. This tells the graph router that it needs to fetch the values of those externally defined fields first, even if the original client query didn't request them.
```

More information about these can be found here:
https://www.apollographql.com/docs/federation/federated-types/federated-directives/
### Tags and Other Identifiers
TODO ADDME

Helpful Documentation: [Apollo Studio - Getting Started](https://www.apollographql.com/docs/studio/getting-started/)