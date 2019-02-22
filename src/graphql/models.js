const { gql } = require('apollo-server');
const Employee = require("../models/employee");
const EmployeeController = require('../controllers/employeeController');

module.exports = {
  // typeDefs: gql`
  //   "Propiedades que posee un empleado"
  //   type Employee {
  //     _id: String,
  //     name: String,
  //     "Posicion laboral que ocupa"
  //     position: String,
  //     "Lugar donde se encuentra la oficina"
  //     office: String,
  //     salary: Int
  //   }

  //   type Query{
  //       employees: [Employee]
  //       getEmployee(name: String): Employee
  //   }
  // `, //////////////////////////////////////////
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
  // }, ///////////////////////////////////////////7
  // mocks: {
  //   Int: () => 15,
  //   Float: () => 22.1,
  //   String: () => 'Hello',
  // }
}
