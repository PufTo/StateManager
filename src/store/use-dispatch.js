import { useContext } from "react";
import { StateContext } from "./MyStateManager";

export function useDispatch() {
  const { dispatch } = useContext(StateContext);
  return dispatch;
}
