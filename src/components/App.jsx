import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(props) {
  return (
    <Entry emoji={props.emoji} name={props.name} description={props.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmoji)};
    </div>
  );
}

export default App;
