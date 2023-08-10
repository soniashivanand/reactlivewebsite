import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container my-2 mx-6">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          {/*<h3>Enter text to anlyze below</h3>*/}
          <h3>{props.heading}</h3>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary my-3 mx-1"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          Convert to lower case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleClearText}
        >
          Clear text
        </button>
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your text summary
        </h3>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.008 * text.split(" ").length} mins read
        </p>
        <h4 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Preview
        </h4>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length > 0 ? text : "Enter text to preview here"}
        </p>
      </div>
    </div>
  );
}
