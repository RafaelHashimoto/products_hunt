const { ApolloServer } = require('apollo-server')
const { readSchema } = require('./schema.js')
const { resolvers } = require('./resolvers.js')

const typeDefs = readSchema()

const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
})

server.listen({
  port: 3000,
  host: '0.0.0.0'
}).then(({ url }) => {
  console.log(`Listening on port ${url}`);
});
