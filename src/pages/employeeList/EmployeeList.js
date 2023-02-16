import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import { getEmployeesFromLocalStorage } from "../../redux/actions/employeeActions";

const EmployeeList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesFromLocalStorage());
  }, [dispatch]);

  const employees = useSelector((state) => state.employees.employees);
  const totalEmployees = employees.length;

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      sorter: (a, b) => a.department.localeCompare(b.department),
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
    },
    {
      title: "Street",
      dataIndex: "street",
      key: "street",
      sorter: (a, b) => a.street.localeCompare(b.street),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      sorter: (a, b) => a.state.localeCompare(b.state),
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      key: "zipCode",
      sorter: (a, b) => a.zipCode.localeCompare(b.zipCode),
    },
  ];

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Table
        columns={columns}
        dataSource={employees}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: 5,
          pageSizeOptions: ["5", "10", "15", "20"],
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} employees`,
        }}
      />
    </div>
  );
};

export default EmployeeList;
