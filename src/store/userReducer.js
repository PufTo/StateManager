const userReducer = (state = { loggedIn: false }, action) => {
  //   console.log("reducer", action);
  if (action === "login") {
    return {
      loggedIn: true,
    };
  }

  if (action === "logout") {
    return {
      loggedIn: false,
    };
  }

  if (action === "toggle") {
    return {
      loggedIn: !state.loggedIn,
    };
  }

  return state;
};

export { userReducer };
