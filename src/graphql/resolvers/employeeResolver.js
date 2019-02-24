const Employee = require("../../models/employee");

module.exports = {
  Query: {
    employees: async () => {
      return await Employee.find({});
    },
    async employee(root, args) {
      return await Employee.findOne(args);
    }
  }
};
