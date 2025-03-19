import { redux, legacy_createStore as createStore } from "redux";

// Create a reducer function
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Create a Redux store
const store = createStore(counterReducer);

// export reducer function to store

export default store;
