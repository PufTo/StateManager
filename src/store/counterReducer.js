const counterReducer = (state = { counter: 0 }, action) => {
  if (action === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

export { counterReducer };
