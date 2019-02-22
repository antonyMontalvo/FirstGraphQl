const express = require("express");
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');// como es una clase hay que definirla en un objeto

router.get('/', EmployeeController.getEmployee);
// router.post('/', EmployeeController.insertEmployees);
// router.get('/:id', EmployeeController.getEmployeeById);
// router.put('/:id', EmployeeController.updateEmployee);
// router.delete('/:id', EmployeeController.deleteEmployee);

module.exports = router;