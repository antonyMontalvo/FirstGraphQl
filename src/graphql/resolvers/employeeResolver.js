const Employee = require("../../models/employee");

module.exports = {
  Query: {
    employees: async () => {
      return await Employee.find({});
    },
    employee: async (obj, args) => {
      return await Employee.findOne(args); //args representa un { _id: args._id }
    }
  },
  Mutation: {
    addEmployee: async (obj, args) => {
      const employee = new Employee(args);
      return await employee.save();
    },
    updateEmployee: async (obj, args) => {
      const employee = {
        name: args.name,
        position: args.position,
        office: args.office,
        salary: args.salary
      };

      return await Employee.findByIdAndUpdate(
        //El args._id funciona igual que { _id: args._id } para mongoDB
        { _id: args._id },
        { $set: employee },
        { new: true }
      );
    },
    deleteEmployee: async (obj, args) => {
      const res = await Employee.findByIdAndRemove(args._id);
      return res == null ? "This id not exists" : "Delete succesfully";
    }
  }
};
