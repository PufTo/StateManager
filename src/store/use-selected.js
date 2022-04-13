import { useContext, useEffect, useState } from "react";
import { StateContext } from "./MyStateManager";

export function useSelected(selectFn) {
  const { getState, subscribe } = useContext(StateContext);
  const [selected, setSelected] = useState(selectFn(getState()));

  useEffect(() => {
    const listener = (state) => {
      setSelected(selectFn(state));
    };
    const unsub = subscribe(listener);

    return () => {
      unsub();
    };
  }, [selectFn, subscribe]);

  return selected;
}
