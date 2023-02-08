import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { states } from "../../data/states";
import { addEmployee } from "../../redux/actions/employeeActions";
import Select from "react-select";

const Main = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(states[0].name);
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");
  const optionsForStates = states.map((state) => ({
    value: state.name,
    label: state.name,
  }));
  const optionsForDepartment = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];

  const handleChange = (e, selected) => {
    if (selected === "states") {
      setState(e.value);
    }
    if (selected === "department") {
      setDepartment(e.value);
    }
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };
    dispatch(addEmployee(employee));
  };
  return (
    <main>
      <div className="container">
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={saveEmployee}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            type="text"
            id="date-of-birth"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="start-date"
            onChange={(e) => setStartDate(e.target.value)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <Select
              defaultValue={optionsForStates[0]}
              className="select"
              name="states"
              options={optionsForStates}
              onChange={(e) => handleChange(e, "states")}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>

          {/* <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select> */}
          <label htmlFor="department">Department</label>
          <Select
            defaultValue={optionsForDepartment[0]}
            className="select"
            name="department"
            options={optionsForDepartment}
            onChange={(e) => handleChange(e, "department")}
          />
          <input type="submit" value="Save" className="btnSubmit" />
        </form>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </main>
  );
};

export default Main;
