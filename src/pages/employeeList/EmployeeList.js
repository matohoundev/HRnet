import React, { useState, useEffect } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      startDate: "01/01/2020",
      department: "Sales",
      dateOfBirth: "01/01/1990",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    },
  ]);

  useEffect(() => {
    // setEmployees(JSON.parse(localStorage.getItem("employees")));
    setEmployees(employees);
  }, [employees]);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
