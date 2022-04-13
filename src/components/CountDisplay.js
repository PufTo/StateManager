import React from "react";
import { useSelected } from "../store/use-selected";

export default function CountDisplay() {
  const displayValue = useSelected((state) => state.counter.counter);
  return <label>{displayValue}</label>;
}
