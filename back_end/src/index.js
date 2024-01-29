const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Query {
  appName: String
}
`

const resolvers = {
  Query: {
    appName: () =>
      'ProductHunt clone'
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen({
  port: 3000,
  host: '0.0.0.0'
}).then(({ url }) => {
  console.log(`Listening on port ${url}`);
});
