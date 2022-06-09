import React from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
         src="https://www.belloflostsouls.net/wp-content/uploads/2019/05/shadowrun-6th-ed-horz.jpg" alt="shadowrun-totem 6e" />
      <form>
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
  
  
  
  
  <input type="submit" value="Submit" />
</form>
      </header>
    </div>
  );
}

export default App;
