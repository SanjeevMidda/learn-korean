import React, { useState } from "react";

const Nouns = ({ changeLanguage }) => {
  let nouns = [
    {
      korean: "밥",
      english: "rice",
      koreanPhrase: "밥이 맛있어요",
      englishPhrase: "This rice is tasty",
    },
    {
      korean: "김치",
      english: "kimchi",
      koreanPhrase: "이 김치가 맛있지 않아요",
      englishPhrase: "This kimichi is not tasty",
    },
    {
      korean: "고기",
      english: "meat",
      koreanPhrase: "김치는 빨간색이에요",
      englishPhrase: "Meat is red color",
    },
    {
      korean: "국",
      english: "soup",
      koreanPhrase: "국이 많아요",
      englishPhrase: "That is a lot of soup",
    },
    {
      korean: "반찬",
      english: "side dishes",
      koreanPhrase: "반찬이 다섯 개 있어요",
      englishPhrase: "There are 5 side dishes",
    },
    {
      korean: "과일",
      english: "fruit",
      koreanPhrase: "과일이 보라색이에요",
      englishPhrase: "The fruit is purple color",
    },
    {
      korean: "채소",
      english: "vegetables",
      koreanPhrase: "야채가 세 개 있어요",
      englishPhrase: "There are 3 vegetables",
    },
    {
      korean: "생선",
      english: "fish",
      koreanPhrase: "생선이 기름져요",
      englishPhrase: "The fish is oily",
    },
    {
      korean: "떡",
      english: "rice cake",
      koreanPhrase: "떡이 흰색이에요",
      englishPhrase: "The rice cake is white",
    },
    {
      korean: "면",
      english: "noodles",
      koreanPhrase: "이 국수는 뜨거워요",
      englishPhrase: "The noodles are hot",
    },
    {
      korean: "빵",
      english: "bread",
      koreanPhrase: "빵이 크런치해요",
      englishPhrase: "The bread is crunchy",
    },
    {
      korean: "계란",
      english: "egg",
      koreanPhrase: "계란이 두 개 있어요",
      englishPhrase: "There are two eggs",
    },
    {
      korean: "소스",
      english: "sauce",
      koreanPhrase: "소스가 갈색이에요",
      englishPhrase: "The sauce is brown",
    },
    {
      korean: "샐러드",
      english: "salad",
      koreanPhrase: "샐러드가 바삭해요",
      englishPhrase: "This salad is cruchy",
    },
    {
      korean: "치즈",
      english: "cheese",
      koreanPhrase: "치즈가 노란색이에요",
      englishPhrase: "The cheese is yellow",
    },
    {
      korean: "우유",
      english: "milk",
      koreanPhrase: "우유를 팔아주세요",
      englishPhrase: "Sell the milk please",
    },
    {
      korean: "커피",
      english: "coffee",
      koreanPhrase: "커피 주세요",
      englishPhrase: "Please give me some coffee",
    },
    {
      korean: "차",
      english: "tea",
      koreanPhrase: "차 주세요",
      englishPhrase: "Please give me some tea",
    },
    {
      korean: "맥주",
      english: "beer",
      koreanPhrase: "맥주 주세요",
      englishPhrase: "Please give some beer",
    },
    {
      korean: "소주",
      english: "soju",
      koreanPhrase: "소주 주세요",
      englishPhrase: "Please give me some soju",
    },
  ];

  let randomWord = () => {
    return nouns[Math.floor(Math.random() * nouns.length)];
  };

  console.log(randomWord());
  const [word, setWord] = useState(randomWord());

  return (
    <div
      className="vowels"
      onClick={() => setWord(nouns[Math.floor(Math.random() * nouns.length)])}
    >
      {changeLanguage ? (
        <div className="divPosition">
          <h1>{word.korean}</h1> <h5>{word.koreanPhrase}</h5>
        </div>
      ) : (
        <div className="divPosition">
          <h2>{word.english}</h2> <h5>{word.englishPhrase}</h5>
        </div>
      )}
    </div>
  );
};

export default Nouns;
