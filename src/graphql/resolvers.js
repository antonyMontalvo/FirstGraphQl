const { mergeResolvers } = require("merge-graphql-schemas");

const clientResolver = require("./resolvers/clientResolver"),
  employeeResolver = require("./resolvers/employeeResolver");

const resolvers = [clientResolver, employeeResolver];

module.exports = mergeResolvers(resolvers);
