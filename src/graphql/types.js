const { mergeTypes } = require("merge-graphql-schemas");

const Employee = require("./employee");

const typeDefs = [Employee];

module.exports =  mergeTypes(typeDefs, { all: true });