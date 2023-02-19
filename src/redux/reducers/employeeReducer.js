const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case "GET_EMPLOYEES_FROM_LOCAL_STORAGE":
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
