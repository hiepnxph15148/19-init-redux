import { redux, legacy_createStore as createStore } from "redux";

// Create a reducer function
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Create a Redux store
const store = createStore(counterReducer);

// export reducer function to store

export default store;
