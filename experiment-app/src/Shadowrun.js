import React from "react";
import Card from "react-bootstrap/Card"
import "./Shadowrun.css";

import "./App.css";

function App() {
  return (
    <div className="characterData">
      <header className="App-header">
        <img className="shadowrunImg"
          src="https://www.belloflostsouls.net/wp-content/uploads/2019/05/shadowrun-6th-ed-horz.jpg"
          alt="shadowrun-totem 6e"
        />
        <Card className="personalData">
      <Card.Body className="personalDataBox">
        <Card.Title>Name/ Primary Alias</Card.Title>
        {/* Grab info from character creation sheet and show name/ alias here */}
        <Card.Subtitle>Meta-type</Card.Subtitle>
        {/* Grab info from character creation sheet and show Meta-type here */}
        <Card.Subtitle>Age</Card.Subtitle>
        {/* Grab info from character creation sheet and show Age here */}
        <Card.Subtitle>Height</Card.Subtitle>
        {/* Grab info from character creation sheet and show height here */}
        <Card.Subtitle>Reputation</Card.Subtitle>
        {/* Grab info from character creation sheet and show Reputation here */}
        <Card.Subtitle>Heat</Card.Subtitle>
        {/* Grab info from character creation sheet and show Heat here */}
        <Card.Subtitle>Karma</Card.Subtitle>
        {/* Grab info from character creation sheet and show Karma here */}
        <Card.Subtitle>Total Karma</Card.Subtitle>
        {/* Grab info from character creation sheet and show Total Karma here */}
        <Card.Subtitle>Misc</Card.Subtitle>
        {/* Grab info from character creation sheet and show Misc here */}
          </Card.Body>
    </Card>
    <div className="attributes">
    <Card>
  <Card.Body>
    <Card.Title>Attributes</Card.Title>
    <Card.Subtitle>Body</Card.Subtitle>
    {/* Grab info from character creation sheet and show body here */}
    <Card.Subtitle>Agility</Card.Subtitle>
    {/* Grab info from character creation sheet and show Agility here */}
    <Card.Subtitle>Reaction</Card.Subtitle>
    {/* Grab info from character creation sheet and show Reaction here */}
    <Card.Subtitle>Strength</Card.Subtitle>
    {/* Grab info from character creation sheet and show Strength here */}
    <Card.Subtitle>Willpower</Card.Subtitle>
    {/* Grab info from character creation sheet and show Willpower here */}
    <Card.Subtitle>Logic</Card.Subtitle>
    {/* Grab info from character creation sheet and show Logic here */}
    <Card.Subtitle>Intuition</Card.Subtitle>
    {/* Grab info from character creation sheet and show Intuition here */}
    <Card.Subtitle>Charisma</Card.Subtitle>
    {/* Grab info from character creation sheet and show Charisma here */}
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
  </Card.Body>
</Card>
</div>
      </header>
    </div>
  );
}

export default App;
