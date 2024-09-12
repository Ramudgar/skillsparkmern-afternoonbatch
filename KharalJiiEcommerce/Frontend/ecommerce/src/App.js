import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
// import Counter from "./CounterComponent";
// import CounterFunc from "./Components/Counter/CounterComponent";
function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
      </Router>
      {/* <Counter />
      <CounterFunc /> */}
    </>
  );
}

export default App;
