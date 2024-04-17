import React from "react";


import { P } from "../Cornestone-pages/styles";

export function Paragraph({ children, isTaskCompleted }) {
  console.log(isTaskCompleted);
  return <P isTaskCompleted={isTaskCompleted}>{children}</P>;
}
