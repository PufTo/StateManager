import React from "react";
import { useDispatch } from "../store/use-dispatch";

export default function StyledButton() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch("toggle")}>Toggle Login</button>;
}
