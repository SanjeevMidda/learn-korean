import React from "react";

const Link = ({ color, text, changeText, changeColor }) => {
  return (
    <div className="link">
      <div className="circle" style={{ backgroundColor: color }}></div>
      <h4
        onClick={() => {
          changeText(text);
          changeColor(color);
        }}
      >
        {text}
      </h4>
    </div>
  );
};

export default Link;
