import { combineReducers, createStore } from "./MyStateManager";

import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";

it("checks the combineReducer function", () => {
  const mockReducers = {
    state1: jest.fn((state1) => state1 + 1),
    state2: jest.fn((state2) => {
      return {
        value: state2.value + 2,
      };
    }),
    state3: jest.fn((state3) => state3),
  };

  const combinedMockReducers = combineReducers(mockReducers);

  const mockOldState = {
    state1: 0,
    state2: { value: 0 },
    state3: 3,
  };

  expect(combinedMockReducers(mockOldState)).toEqual({
    state1: 1,
    state2: { value: 2 },
    state3: 3,
  });
});

describe("testing my custom state manager", () => {
  const combinedReducers = combineReducers({
    counter: counterReducer,
    user: userReducer,
  });

  //   const spyReducer = jest.fn(combinedReducers);

  const store = createStore(combinedReducers);

  it("checks if observers can subscribe properly", () => {
    const mockListener = jest.fn();

    store.subscribe(mockListener);

    expect(store.getListeners().length).toBe(1);
  });

  it("checks if observers can unsubscribe", () => {
    const mockListener = jest.fn();

    const unsub = store.subscribe(mockListener);
    unsub();
    expect(store.getListeners().length).toBe(1);
    expect(store.getListeners().indexOf(mockListener)).toBe(-1);
  });

  it("checks if the reducer gets called", () => {
    const mockReducer = jest.fn((state, action) => {});
    const store = createStore(mockReducer);
    store.dispatch("");
    expect(mockReducer).toBeCalled();
  });

  it("checks if notification works", () => {
    expect(store.getListeners().length).toBe(1);
    const mockListeners = [];
    for (let i = 0; i < 9; i++) {
      const fn = jest.fn((state) => state);
      mockListeners.push();
      store.subscribe(fn);
    }
    expect(store.getListeners().length).toBe(10);
    store.dispatch("increment");
    mockListeners.forEach((fn) => {
      expect(fn).toBeCalled();
    });
  });

  it("checks if the state is immutable", () => {
    const state = store.getState();
    state.counter.ana = 10;
    const sameState = store.getState();
    expect(sameState.counter.and).toBeUndefined();
  });
});
