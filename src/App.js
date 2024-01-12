import React, { useState, useEffect, useRef } from "react";
let count = 0;
function App(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    count++;
  });
  return (
    <>
      <input
        name={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <div>My name is {name}</div>
      <div>I render count: {count}</div>
    </>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// function App(props) {
//   const [name, setName] = useState("");
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setCount((previous) => previous + 1);
//   }, [name]);
//   return (
//     <>
//       <input
//         name={name}
//         type="text"
//         onChange={(event) => setName(event.target.value)}
//       />
//       <div>My name is {name}</div>
//       <div>I render count: {count}</div>
//     </>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//-----------------------
// let val = 0;
// function App() {
//   val++;
//   console.log("Hello " + val);
//   const [number, setNumber] = useState(() => {
//     console.log("Called Initially");
//     return 10;
//   });
//   const increment = () => {
//     setNumber((previousNumber) => previousNumber + 1);
//     setNumber((previousNumber) => previousNumber + 1);
//   };
//   const decrement = () => setNumber(number - 1);

//   return (
//     <>
//       <button onClick={increment}>+</button>
//       <span>{number}</span>
//       <button onClick={decrement}>-</button>
//     </>
//   );
// }
