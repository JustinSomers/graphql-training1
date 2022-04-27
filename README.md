# GRAPHQL TRAINING #

This is a traning repository to teach best practices for Apollo Server in a GraphQL Monolith.

### Who is this repository for? ###

This repository does not assume any GraphQL knowledge, but does assume basic knowledge in the following:

* NodeJS + Express
* Typescript
* Installing via npm and brew

### How do I get set up? ###

* [Install homebrew](https://brew.sh/)
* brew install redis
* Install latest NodeJS LTS (even version)
    * You should probably never install an odd version of NodeJS unless you have a good reason. [Here's why.](https://nodejs.org/en/about/releases/)
    * NodeJS includes a package manager named [npm](https://www.npmjs.com/), we'll be using it a lot via package.json scripts.
    * [nvm](https://github.com/nvm-sh/nvm) is great, you should consider using it.
* Sign up for an [Imgur account](https://imgur.com/).
* Get [Postman](https://www.postman.com/).
* Click "Run in Postman" on [this page](https://apidocs.imgur.com/) to get the Imgur Postman collection.
* Get the CLIENT_ID from Kyle Banner.
* Put the CLIENT_ID and USERNAME in a new .env file following the .env.example

### What's in here? ###

* Getting Started
    * This is the output of [this page](https://www.apollographql.com/docs/apollo-server/getting-started/) and is a good first look at GraphQL. We'll discuss this one-file graphql server fully in the course.
* Monolith
    * This is pretty close to a real-world example of a GraphQL Monolith. It's "pretty close" because we're manually inputting the info a client would usually send us in the .env file. This GraphQL Monolith is wrapping the [Imgur REST API](https://apidocs.imgur.com/).
