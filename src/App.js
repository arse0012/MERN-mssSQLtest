import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitAccount = () => {
    Axios.post("http://localhost:3001/api/addNewData", {
      name: name, 
      email: email,
      password: password,
    }).then(() => {
      console.log("successful insert");
    });
  };

  return (
    <div className="App">
      <h1>MernSql App</h1>

      <div className="form">
        <label>User name:</label>
        <input type="text" 
        name="name" 
        onChange={(e) => {
          setUserName(e.target.value);
        }} />
        <label>Email:</label>
        <input type="text" 
        name="email" 
        onChange={(e) => {
          setEmail(e.target.value);
        }} />
        <label>Password:</label>
        <input type="text" 
        name="password" 
        onChange={(e) => {
          setPassword(e.target.value);
        }} />
        <button onClick={submitAccount}>Submit</button>
      </div>
    </div>
  );
}

export default App;
