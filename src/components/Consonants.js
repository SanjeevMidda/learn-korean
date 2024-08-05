import React, { useState } from "react";

const Consonants = ({ changeLanguage }) => {
  let consonants = [
    {
      korean: "ㄱ",
      english: "g/k",
    },
    {
      korean: "ㄲ",
      english: "kk/k",
    },
    {
      korean: "ㄴ",
      english: "n",
    },
    {
      korean: "ㄷ",
      english: "d/t",
    },
    {
      korean: "ㄸ",
      english: "tt",
    },
    {
      korean: "ㄹ",
      english: "r/l",
    },
    {
      korean: "ㅁ",
      english: "m",
    },
    {
      korean: "ㅂ",
      english: "b/p",
    },
    {
      korean: "ㅃ",
      english: "pp",
    },
    {
      korean: "ㅅ",
      english: "s/t",
    },
    {
      korean: "ㅆ",
      english: "ss",
    },
    {
      korean: "ㅇ",
      english: "ng",
    },
    {
      korean: "ㅈ",
      english: "j/t",
    },
    {
      korean: "ㅉ",
      english: "jj",
    },
    {
      korean: "ㅊ",
      english: "ch/t",
    },
    {
      korean: "ㅋ",
      english: "k",
    },
    {
      korean: "ㅌ",
      english: "t",
    },
    {
      korean: "ㅍ",
      english: "p",
    },
    {
      korean: "ㅎ",
      english: "h/t",
    },
  ];

  let randomWord = () => {
    return consonants[Math.floor(Math.random() * consonants.length)];
  };

  console.log(randomWord());
  const [word, setWord] = useState(randomWord());

  return (
    <div
      className="vowels"
      onClick={() =>
        setWord(consonants[Math.floor(Math.random() * consonants.length)])
      }
    >
      {changeLanguage ? <h1>{word.korean}</h1> : <h2>{word.english}</h2>}
    </div>
  );
};

export default Consonants;
