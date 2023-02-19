export const addEmployee = (employee) => {
  return {
    type: "ADD_EMPLOYEE",
    payload: employee,
  };
};

export const getEmployeesFromLocalStorage = () => {
  return {
    type: "GET_EMPLOYEES_FROM_LOCAL_STORAGE",
    payload: JSON.parse(localStorage.getItem("employees")) || [],
  };
};
