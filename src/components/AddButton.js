import React from "react";
import { useDispatch } from "../store/use-dispatch";

export default function AddButton() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch("increment")}>AddButton</button>;
}
