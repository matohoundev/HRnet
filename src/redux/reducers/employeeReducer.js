const initialState = {
  employees: [],
  employee: {},
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default employeeReducer;
