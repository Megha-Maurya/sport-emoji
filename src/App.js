import "./styles.css";
import React, { useState } from 'react';
var emojiDictionary = {
  "ðĪžââïļ": "Wrestling",
  "âđïļ": "Dribbling",
  "ðĪš": "Fencing",
  "ðïļââïļ": "Golfer",
  "ð": "Horse riding",
  "ðââïļ": "Surfing",
  "ðīââïļ": "Biking",
  "ð§": "Climbing",
  "ðĢââïļ": "Rowing boat"
}
var emojiWeKnow = Object.keys(emojiDictionary)

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    
    if (meaning === undefined) {
      meaning = "we don't have this in our database"
    } setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning)
  }
  return (
    <div className="App">
      <h1>Sport Emoji</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <h3>emoji we know </h3> {
        emojiWeKnow.map(emoji => {
          return (
             <span
          onClick = {() => emojiClickHandler(emoji)}
           style= {{ fontSize: "2rem", padding: "0.5rem",}} key={emoji}> {emoji} </span>
         )})
      }
      </div>
  );
}
