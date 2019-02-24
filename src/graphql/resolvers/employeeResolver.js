const Employee = require("../../models/employee");

module.exports = {
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
    employee: _id => {}
  }
};
