import React from "react";

import { P } from "../../Pages/Health/styles";

export function Paragraph({ children, isTaskCompleted }) {
<<<<<<< HEAD
 // console.log(isTaskCompleted);
=======
  //console.log(isTaskCompleted)
>>>>>>> 681b90a60437cb91ac1fdbe6f819e65de9bf986a
  return <P isTaskCompleted={isTaskCompleted}>{children}</P>;
}
