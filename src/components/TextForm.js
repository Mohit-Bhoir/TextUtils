import React,{useState}from "react";


export default function TextForm(props) {
    const [Text, setText] = useState('Enter text here');
    // Text = "New Text".... Wrong way to change the state ....We msut have to use setText Function
    // setText("New Text)...Correct way to change the state

    const handleUpClick =()=> {
        console.log("Uppercase was clicked" +Text);
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    };
    const handleLowClick =()=> {
        console.log("Lowercase was clicked" +Text);
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    };
    const handleClearText =()=> {
        console.log("Clear Text was clicked" +Text);
        let newText = ("");
        setText(newText)
        props.showAlert("Text Cleared","success")
    };
    const handleOnChange =(event)=> {
        console.log("On change");
        setText(event.target.value)
    };
  return (
     <> 
      <div className="container">
      <div className="form-floating my-3">
        <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        id="floatingTextarea2"
        value = {Text}
        onChange={handleOnChange}
        style={{height:'200px',backgroundColor:props.mode==='light'?'white':'grey'}}
        // style={{}}
      ></textarea>
      <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Upper CASE</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleLowClick}>Convert to Lower CASE</button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{Text.split(" ").length} words , {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{Text}</p>
    </div>
      </div>
    </>
  );
}
