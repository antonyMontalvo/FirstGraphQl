const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = require("./types");
const resolvers = require("./models");

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports =  schema;