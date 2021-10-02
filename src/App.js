import "./styles/main.css";
import React from "react";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import Login from "./pages/Auth/Login";

function App(props) {
  return (
    <div className='bg-light-100 w-vw h-vh'>
      <Loading />
      <Home />
    </div>
  );
}

export default App;
