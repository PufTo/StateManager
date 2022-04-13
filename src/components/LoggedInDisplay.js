import React from "react";
import { useSelected } from "../store/use-selected";
export default function LoggedInDisplay() {
  const displayValue = useSelected((state) => state.user.loggedIn);

  return <label>{displayValue + ""}</label>;
}
