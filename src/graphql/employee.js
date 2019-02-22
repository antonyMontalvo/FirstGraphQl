module.exports = `
    type Employee {
            _id: String,
            name: String,
            "Posicion laboral que ocupa"
            position: String,
            "Lugar donde se encuentra la oficina"
            office: String,
            salary: Int
          }
      
          type Query{
              employees: [Employee]
              getEmployee(name: String): Employee
          }
        `;
