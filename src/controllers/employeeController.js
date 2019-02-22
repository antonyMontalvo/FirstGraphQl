const Employee = require("../models/employee"); //pongo Employee porque es un modelo
const { typeDefs } = require("../graphql/models");

const EmployeesController = {};

EmployeesController.getEmployee = async (req, res) => {  /**Asnyc-await */
    try {
        const employees = await Employee.find();
        res.status(200).send(employees);
    } catch (error) {
        res.status(202).send(error);
    }
}


EmployeesController.insertEmployees = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();

    res.status(201).json({
        message: "Insert succesfully"
    });
};

EmployeesController.getEmployeeById = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json({
        employee
    });
};

EmployeesController.updateEmployee = async (req, res) => {
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    await Employee.findByIdAndUpdate(
        req.params.id, { $set: employee }, { new: true }
    );

    res.status(200).json({
        message: "Update succesfully"
    });
};

EmployeesController.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);

    res.status(200).json({
        message: "Delete sucesfully"
    });
};

module.exports = EmployeesController;

// module.exports = {
//     Query: {
//         employees: (obj, args) => {
//             return new Promise((resolve, reject) => {
//                 Employee.find().exec((err, res) => {
//                     err ? reject(err) : resolve(res)
//                 })
//             })
//         }
//     }
// }