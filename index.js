const { createStore } = require("redux");

// CONSTANT FOR ACTION TYPE
const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";
const INCREAMENT_BY_VALUE = "INCREAMENT_BY_VALUE";
const DECREAMENT_BY_VALUE = "DECREAMENT_BY_VALUE";

// INCREAMENT ACTION
const increamentAction = () => {
  return {
    type: INCREAMENT,
  };
};

// DECREAMENT ACTION
const decreamentAction = () => {
  return {
    type: DECREAMENT,
  };
};

// INCREAMENT BY VALUE ACTION
const increamentByValue = (value) => {
  return {
    type: INCREAMENT_BY_VALUE,
    payload: value,
  };
};

// DECREAMENT BY VALUE

const decreamentByValue = (value) => {
  return {
    type: DECREAMENT_BY_VALUE,
    payload: value,
  };
};

// INITIALIZE A STATE
const initialState = {
  count: 0,
};

// COUNTER REDUCER
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREAMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "INCREAMENT_BY_VALUE":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "DECREAMENT_BY_VALUE":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

// CREATE A REDUX STORE
const store = createStore(counterReducer);

// SUBSCRIBE TO THE STORE
store.subscribe(() => console.log(store.getState()));

// DISPATCHED ACTION
store.dispatch(increamentAction());
store.dispatch(increamentAction());
store.dispatch(increamentByValue(10));
store.dispatch(decreamentByValue(6));
