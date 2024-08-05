import "./index.css";
import Link from "./components/Link";
import { useState } from "react";
import Vowels from "./components/Vowels";
import Consonants from "./components/Consonants";
import Verbs from "./components/Verb";
import Nouns from "./components/Nouns";
import Room from "./components/Room";

function App() {
  const [selected, setSelected] = useState("nouns");
  const [mainCircleColor, setMainCircleColor] = useState("blue");
  const [changeLanguage, setChangeLanguage] = useState(false);

  return (
    <div className="App">
      <div className="appContainer">
        <header>
          <Link
            color="blue"
            text="vowels"
            changeText={setSelected}
            changeColor={setMainCircleColor}
          />
          <Link
            color="pink"
            text="consonants"
            changeText={setSelected}
            changeColor={setMainCircleColor}
          />
          <Link
            color="purple"
            text="verbs"
            changeText={setSelected}
            changeColor={setMainCircleColor}
          />
          <Link
            color="orange"
            text="nouns"
            changeText={setSelected}
            changeColor={setMainCircleColor}
          />
          <Link
            color="green"
            text="room"
            changeText={setSelected}
            changeColor={setMainCircleColor}
          />
        </header>

        <div className="mainContainer">
          {selected === "vowels" && (
            <Vowels changeLanguage={changeLanguage}></Vowels>
          )}
          {selected === "consonants" && (
            <Consonants changeLanguage={changeLanguage}></Consonants>
          )}
          {selected === "verbs" && (
            <Verbs changeLanguage={changeLanguage}></Verbs>
          )}
          {selected === "nouns" && (
            <Nouns changeLanguage={changeLanguage}></Nouns>
          )}
          {selected === "room" && <Room changeLanguage={changeLanguage}></Room>}
        </div>

        <footer>
          {/* <h1>{selected}</h1> */}
          <h3 onClick={() => setChangeLanguage(!changeLanguage)}>
            {changeLanguage ? "Korean" : "English"}
          </h3>
          <div
            className="mainCircle"
            style={{ backgroundColor: mainCircleColor }}
            onClick={() => setChangeLanguage(!changeLanguage)}
          ></div>
        </footer>
      </div>
    </div>
  );
}

export default App;
