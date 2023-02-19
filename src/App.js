import { Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import NavBar from "./starter/navbar/NavBar";
import Main from "./pages/home/Main";
import EmployeeList from "./pages/employeeList/EmployeeList";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Fragment>
  );
}

export default App;
