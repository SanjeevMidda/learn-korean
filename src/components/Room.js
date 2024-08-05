import React, { useState } from "react";

const Room = ({ changeLanguage }) => {
  let nouns = [
    {
      korean: "노트북",
      english: "laptop",
      koreanPhrase: "이 노트북은 정말 좋아요",
      englishPhrase: "This laptop is really good",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZnks3E9XA_D4WFZLHF2226d-q814gVaGew&s",
    },
    {
      korean: "텔레비전",
      english: "tv",
      koreanPhrase: "새 티비를 샀어요",
      englishPhrase: "I bought a new tv",
      img: "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/b41a7fde-dcc1-11ec-9f1b-2e0c91dc8f24.jpg",
    },
    {
      korean: "탁자",
      english: "table",
      koreanPhrase: "탁자가 방에 있어요",
      englishPhrase: "There is a table in the room",
      img: "https://www.ikea.com/gb/en/images/products/ekedalen-extendable-table-dark-brown__0736963_pe740827_s5.jpg",
    },
    {
      korean: "핸드폰",
      english: "phone",
      koreanPhrase: "휴대폰을 충전해야 해요",
      englishPhrase: "I need to charge my phone",
      img: "https://johnlewis.scene7.com/is/image/JohnLewis/mobiles-nav-card-apple2-200323",
    },
    {
      korean: "펜",
      english: "pen",
      koreanPhrase: "펜을 주세요",
      englishPhrase: "Please give me a pen",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/03-BICcristal2008-03-26.jpg",
    },
    {
      korean: "연필",
      english: "pencil",
      koreanPhrase: "저는 연필로 씁니다.",
      englishPhrase: "I write with a pencil",
      img: "https://i.pinimg.com/474x/ef/d4/96/efd4968f533f933247ae74cc78464aa9.jpg",
    },
    {
      korean: "컵",
      english: "cup",
      koreanPhrase: "컵을 주세요",
      englishPhrase: "Please give me a cup",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg/800px-Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg",
    },
    {
      korean: "책",
      english: "book",
      koreanPhrase: "책을 읽어요",
      englishPhrase: "I read a book",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-crw0gMQo_4KCXAtx9fxfrNr7eFEBmI1X4g&s",
    },
    {
      korean: "침대",
      english: "bed",
      koreanPhrase: "새 침대를 샀어요",
      englishPhrase: "I bought a new bed",
      img: "https://www.getlaidbeds.co.uk/image/data/Bed%20Products/Bed%20Bases%20-%20Adjustable/Electronic-Base-Oxford-Bed-Frame-HiRes.jpg",
    },
    {
      korean: "창문",
      english: "window",
      koreanPhrase: "창문을 열어요",
      englishPhrase: "I open the window",
      img: "https://www.thompsoncreek.com/wp-content/uploads/2021/05/shutterstock_315289424-scaled.jpg",
    },
    {
      korean: "문",
      english: "door",
      koreanPhrase: "문을 닫아주세요",
      englishPhrase: "Please close the door",
      img: "https://www.londondoor.co.uk/wp-content/uploads/LDC0001_74_SW19-3LN_1930_4A2892_indigo.jpg",
    },
    {
      korean: "운동화",
      english: "trainers",
      koreanPhrase: "운동화를 신고 가세요",
      englishPhrase: "PLease wear trainers when you go",
      img: "https://media.glamourmagazine.co.uk/photos/63064ad263d110ee64653af0/16:9/w_2580,c_limit/WHITE%20TRAINERS%20240822%20MAIN.jpg",
    },
    {
      korean: "음료",
      english: "drink",
      koreanPhrase: "음료수를 마셔요",
      englishPhrase: "I drink a beverage",
      img: "https://www.southernliving.com/thmb/SEwOXQceeJ1VPWhY1OQaDKTqV2Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SL_Roy_Rogers_Drink_3-8e06c8f2df244c5ea6c5b7b55848072f.jpg",
    },
    {
      korean: "반바지",
      english: "shorts",
      koreanPhrase: "여름에 반바지를 자주 입어요",
      englishPhrase: "I often wear shorts in the summer.",
      img: "https://m.media-amazon.com/images/I/51AWKhIKDSL.jpg",
    },
    {
      korean: "수건",
      english: "towel",
      koreanPhrase: "수건을 가져와 주세요",
      englishPhrase: "Please bring the towel",
      img: "https://i.ebayimg.com/images/g/KKYAAOSwmgJY4-8g/s-l1600.jpg",
    },
    {
      korean: "베개",
      english: "pillow",
      koreanPhrase: "편안한 베개를 원해요",
      englishPhrase: "I want a comfortable pillow.",
      img: "https://www.valeriahome.com/224-large_default/cotton-pillow.jpg",
    },
    {
      korean: "이불",
      english: "duvet",
      koreanPhrase: "이불을 덮고 자다",
      englishPhrase: "To sleep under a duvet.",
      img: "https://pyxis.nymag.com/v1/imgs/ccd/45d/423f369c5b5b5bae6dddac194f971e8196.rsquare.w600.jpg",
    },
    {
      korean: "가위",
      english: "scissors",
      koreanPhrase: "가위를 어디에 두었어요?",
      englishPhrase: "Where did you put the scissors?",
      img: "https://www.bakerross.co.uk/media/catalog/product/f/c/fc866v-m.jpg",
    },
    {
      korean: "종이",
      english: "paper",
      koreanPhrase: "종이에 글을 쓰다",
      englishPhrase: "To write on paper.",
      img: "https://www.rainbow-creations.co.uk/images/user/18-100620184837.jpg",
    },
    {
      korean: "키보드",
      english: "keyboard",
      koreanPhrase: "키보드가 고장났어요",
      englishPhrase: "The keyboard is broken.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rmtUmu4qnXOOn1_r0xKhK03io5PA1Q1Ij2KnAySGSvBuG4uITAKsW1EY1H4vd5-A1Ds&usqp=CAU",
    },
    {
      korean: "사진",
      english: "photo",
      koreanPhrase: "이 사진은 정말 예쁘다",
      englishPhrase: "This photo is really beautiful.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhB67DFqGGTVhNPgSJ5g0095FZAYUzG5GYg&s",
    },
    {
      korean: "전구",
      english: "light bulb",
      koreanPhrase: "전구가 나갔어요",
      englishPhrase: "The lightbulb is out.",
      img: "https://www.industville.co.uk/cdn/shop/products/5WE27_Bulb_Amber_Industville_Lighting_Classic_LED_Edison_A60-5W-A.jpg?v=1688045973",
    },
    {
      korean: "스웨터",
      english: "jumper",
      koreanPhrase: "새 스웨터를 샀어요",
      englishPhrase: "I bought a new sweater.",
      img: "https://img01.ztat.net/article/spp-media-p1/7df14653975449a3875f5e58dba2c475/cd1fb0a750c0494db308f8177c44c007.jpg?imwidth=1800&filter=packshot",
    },
    {
      korean: "셔츠",
      english: "shirt",
      koreanPhrase: "새 셔츠를 샀어요",
      englishPhrase: "I bought a new shirt.",
      img: "https://imgproxy.oascompany.com/imgproxy/resize:fit/width:1280/quality:90/aHR0cHM6Ly9vYXMuY2VudHJhY2RuLm5ldC9jbGllbnQvZHluYW1pYy9pbWFnZXMvOTc3X2E3YzIzYmQ2ZjgtbmV3LWVsZG92YWRvLWZyb250LWFhYS1vcmlnaW5hbC5qcGc=.jpg",
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
          {/* <h2>{word.english}</h2> <h5>{word.englishPhrase}</h5> */}
          <img src={word.img} alt="" />
        </div>
      )}
    </div>
  );
};

export default Room;
