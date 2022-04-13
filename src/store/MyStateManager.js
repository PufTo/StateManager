import React, { createContext } from "react";

export const StateContext = createContext();

function MyStateProvider({ children, store }) {
  return (
    <StateContext.Provider value={store}>{children}</StateContext.Provider>
  );
}

const createStore = (rootReducer) => {
  let state;
  let listeners = [];

  const getState = () => JSON.parse(JSON.stringify(state));

  const getListeners = () => [...listeners];

  const dispatch = (action) => {
    state = rootReducer(state, action);
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    const unsubscribe = () => {
      listeners = listeners.filter((l) => l !== listener);
    };

    return unsubscribe;
  };

  dispatch({});

  return { getState, dispatch, subscribe, getListeners };
};

const combineReducers = (reducers) => {
  const states = Object.keys(reducers);

  return (oldState = {}, action) => {
    const newState = {};

    states.forEach((state) => {
      const stateReducer = reducers[state];
      newState[state] = stateReducer(oldState[state], action);
    });

    return newState;
  };
};

export { MyStateProvider, createStore, combineReducers };
