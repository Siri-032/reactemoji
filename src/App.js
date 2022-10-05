import React, { useState } from "react";

import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😲": "disbelief",
  "😥 ": "sad",
  "🥡 ": " takeout box",
  "🤍 ": " love",
  "😑 ": "annoyance "
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.traget.vlaue;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = " we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outt</h1>
      <input Onchange={emojiInputHandler} />

      <h2> meaning {meaning}</h2>

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "Pointer", padding: "0.5rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
