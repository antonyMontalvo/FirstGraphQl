const Employee = require("../../models/employee");

module.exports = {
  Query: {
    employees: async () => {
      return await Employee.find({});
    },
    employee: async (obj, args) => {
      return await Employee.findOne(args);
    }
  },
  Mutation: {
    addEmployee: async (obj, args) => {
      const employee = new Employee(args);
      return await employee.save();
    }
  }
};
