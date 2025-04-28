import { useState } from "react";
import DisplayDifficulty from "./DisplayDifficulty";
import MenuList from "./MenuList";
import "./App.css";

function App() {
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="container">
      <div>
        <DisplayDifficulty difficulty={difficulty} />
        <MenuList setDifficulty={setDifficulty} />
      </div>
    </div>
  );
}

export default App;
