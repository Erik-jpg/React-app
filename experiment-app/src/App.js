import React from "react";
import Card from "react-bootstrap/Card"
import { ReactDOM } from "react-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.belloflostsouls.net/wp-content/uploads/2019/05/shadowrun-6th-ed-horz.jpg"
          alt="shadowrun-totem 6e"
        />
        <Card style={{ width: '18rem'}}>
          <Card.Body>
            <Card.title>Personal Data</Card.title>
            <Card.subtittle className="mb-2 text-muted"></Card.subtittle>
        
          <label>
            Name/ Primary Alias:
            <input type="text" name="name" />
          </label>
          <label>
            Metatype:
            <input type="text" name="name" />
          </label>
          <label>
            Age:
            <input type="number" name="name" />
          </label>
          <label>
            Height:
            <input type="text" name="name" />
          </label>
          <label>
            Weight:
            <input type="text" name="name" />
          </label>
          <label>
            Reputation:
            <input type="text" name="name" />
          </label>
          <label>
            Heat:
            <input type="text" name="name" />
          </label>
          <label>
            Karma:
            <input type="text" name="name" />
          </label>
          <label>
            Total Karma:
            <input type="text" name="name" />
          </label>
          <label>
            Misc:
            <input type="text" name="name" />
          </label>
          </Card.Body>
          </Card>
          <input type="submit" value="Submit" />
        
      </header>
    </div>
  );
}

export default App;
