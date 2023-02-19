import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Input } from "antd";
import { getEmployeesFromLocalStorage } from "../../redux/actions/employeeActions";

const { Search } = Input;

const EmployeeList = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getEmployeesFromLocalStorage());
  }, [dispatch]);

  const employees = useSelector((state) => state.employees.employees);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.localeCompare(b.department),
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
    },
    {
      title: "Street",
      dataIndex: "street",
      sorter: (a, b) => a.street.localeCompare(b.street),
    },
    {
      title: "City",
      dataIndex: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
    },
    {
      title: "State",
      dataIndex: "state",
      sorter: (a, b) => a.state.localeCompare(b.state),
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      sorter: (a, b) => a.zipCode.localeCompare(b.zipCode),
    },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Search
        placeholder="Search employees"
        allowClear
        onChange={handleSearch}
        style={{ width: "90%", paddingLeft: "70%" }}
      />
      <Table
        columns={columns}
        dataSource={filteredEmployees}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: 5,
          pageSizeOptions: ["5", "10", "15", "20"],
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} employees`,
        }}
        style={{ width: "90%" }}
        size="middle"
      />
    </div>
  );
};

export default EmployeeList;
