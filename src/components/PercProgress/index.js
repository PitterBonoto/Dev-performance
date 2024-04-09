//import React, { createContext, useContext, useState } from "react";
import React, { useState } from "react";

export function PercProgress({ children, percBar }) {
  //console.log(children.PercBar);
  let percValor = percBar;
  const [percentageComplete1, setPercentageComplete1] = useState(percValor);
  console.log(percValor);
  //return <p percBar={percBar}>valor: {percBar}</p>;
  return (
    <>
      <p></p>
    </>
  );
}

// export function PercProgress({ children, percBar }) {
//   //console.log(children.PercBar);
//   console.log(percBar);
//   let percValor = percBar;

//   return (
//     <>
//       <p>{percBar}</p>
//       <MyContext.Provider
//         value={{
//           percValor,
//         }}
//       ></MyContext.Provider>
//     </>
//   );
// }

// const ContextProgressBar = createContext();

// export function PercProgress({ children, percBar }) {
//   //console.log(children.PercBar);
//   console.log(percBar);
//   let percValor = percBar;

//   const [percentageComplete1, setPercentageComplete1] = useState(percValor);

//   //return <p percBar={percBar}>valor: {percBar}</p>;
//   return (
//     <>
//       <p>{percBar}</p>
//       <ContextProgressBar.Provider
//         value={{ percentageComplete1, setPercentageComplete1 }}
//       >
//         {percBar}
//       </ContextProgressBar.Provider>
//     </>
//   );
// }

// function useProgressBar() {
//   return useContext(ContextProgressBar);
// }

// console.log(useProgressBar());
