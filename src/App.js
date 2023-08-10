import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [text, setText] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Enable Light Mode");
      document.body.style.backgroundColor = "#274764";
      showAlert("Dark mode enabled", "success");
      document.title = "Textutils - Dark Mode";
      /*setInterval(() => {
        document.title = "Textutils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textutils Now!";
      }, 1500);*/
    } else {
      setMode("light");
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "Success");
      document.title = "Textutils - Light Mode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      {/*<Router>*/}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
        aboutText="About Us"
      />
      {/*<Alert alert="This is alert" />*/}
      <Alert alert={alert} />

      <div className="container my-3">
        {/*<Routes>*/}
        {/*<Route exact path="/about" element={<About />}></Route>*/}

        {/*<Route
              exact
              path="/"
  element={*/}
        <TextForm
          mode={mode}
          heading="Enter text to analyse below"
          showAlert={showAlert}
        />

        {/*}></Route>*/}
      </div>
      {/*</Routes>*/}
      {/*</Router>*/}
    </>
  );
}

export default App;
