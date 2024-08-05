import React, { useState } from "react";

const Vowels = ({ changeLanguage }) => {
  let vowels = [
    {
      korean: "ㅏ",
      english: "a",
    },
    {
      korean: "ㅐ",
      english: "ae",
    },
    {
      korean: "ㅑ",
      english: "ya",
    },
    {
      korean: "ㅒ",
      english: "yae",
    },
    {
      korean: "ㅓ",
      english: "eo",
    },
    {
      korean: "ㅔ",
      english: "e",
    },
    {
      korean: "ㅕ",
      english: "yeo",
    },
    {
      korean: "ㅖ",
      english: "ye",
    },
    {
      korean: "ㅗ",
      english: "o",
    },
    {
      korean: "ㅘ",
      english: "wa",
    },
    {
      korean: "ㅙ",
      english: "wae",
    },
    {
      korean: "ㅚ",
      english: "oe",
    },
    {
      korean: "ㅛ",
      english: "yo",
    },
    {
      korean: "ㅜ",
      english: "u",
    },
    {
      korean: "ㅝ",
      english: "wo",
    },
    {
      korean: "ㅞ",
      english: "we",
    },
    {
      korean: "ㅟ",
      english: "wi",
    },
    {
      korean: "ㅠ",
      english: "yu",
    },
    {
      korean: "ㅡ",
      english: "eu",
    },
    {
      korean: "ㅢ",
      english: "ui",
    },
    {
      korean: "ㅣ",
      english: "i",
    },
  ];

  let randomWord = () => {
    return vowels[Math.floor(Math.random() * vowels.length)];
  };

  console.log(randomWord());
  const [word, setWord] = useState(randomWord());

  return (
    <div
      className="vowels"
      onClick={() => setWord(vowels[Math.floor(Math.random() * vowels.length)])}
    >
      {changeLanguage ? <h1>{word.korean}</h1> : <h2>{word.english}</h2>}
    </div>
  );
};

export default Vowels;
