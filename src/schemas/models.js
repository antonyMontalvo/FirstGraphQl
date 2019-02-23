const { gql } = require('apollo-server');
const Employee = require("../models/employee");

module.exports = {
  // resolvers: {
  Query: {
    employees: () => {
      return new Promise((resolve, reject) => {
        Employee.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    getEmployee: (root, args) => {
      return new Promise((resolve, reject) => {
        Employee.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
  // },
}
