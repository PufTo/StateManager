import React from "react";
import { useDispatch } from "../store/use-dispatch";

export default function RemoveButton() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch("decrement")}>RemoveButton</button>;
}
