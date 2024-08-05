import React, { useState } from "react";

const Verbs = ({ changeLanguage }) => {
  let verbs = [
    {
      korean: "하다",
      english: "todo",
    },
    {
      korean: "가다",
      english: "to go",
    },
    {
      korean: "오다",
      english: "to come",
    },
    {
      korean: "보다",
      english: "to see, to watch",
    },
    {
      korean: "먹다",
      english: "to eat",
    },
    {
      korean: "마시다",
      english: "to drink",
    },
    {
      korean: "주다",
      english: "to give",
    },
    {
      korean: "받다",
      english: "to receive",
    },
    {
      korean: "사다",
      english: "to buy",
    },
    {
      korean: "팔다",
      english: "to sell",
    },
    {
      korean: "있다",
      english: "to exist, to have",
    },
    {
      korean: "없다",
      english: "to not exist, to not have",
    },
    {
      korean: "알다",
      english: "to know",
    },
    {
      korean: "모르다",
      english: "to not know",
    },
    {
      korean: "배우다",
      english: "to learn",
    },
    {
      korean: "공부하다",
      english: "to study",
    },
    {
      korean: "일하다",
      english: "to work",
    },
    {
      korean: "말하다",
      english: "to speak, to say",
    },
  ];

  let randomWord = () => {
    return verbs[Math.floor(Math.random() * verbs.length)];
  };

  console.log(randomWord());
  const [word, setWord] = useState(randomWord());

  return (
    <div
      className="vowels"
      onClick={() => setWord(verbs[Math.floor(Math.random() * verbs.length)])}
    >
      {changeLanguage ? <h1>{word.korean}</h1> : <h2>{word.english}</h2>}
    </div>
  );
};

export default Verbs;
