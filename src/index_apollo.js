const express = require('express');
// const { ApolloServer, gql } = require('apollo-server');
const { ApolloServer, gql } = require('apollo-server-express');


const PORT = 4000;

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
// For development
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`Server with express ready at http://localhost:4000${server.graphqlPath}`)
)
// For production
// server.listen().then(({url}) => {
//     console.log(`Server graphql ready at ${url}`);
// })

// Funciona con la api de apollo v2