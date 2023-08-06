import React, { useState } from "react";
import "./Footer.css";

const Footer = ({ setLanguage }) => {
  const [la, setIsLa] = useState();
  return (
    <div>
      <h3>Made by MindX 🔥</h3>
      <div>
        {la === "US" ? <span>Available on:</span> : <span>Tiện ích:</span>}

        <span
          onClick={() => {
            setLanguage("VN");
            setIsLa("VN");
          }}
          className={
            la === "VN" ? "languague-picker selected" : "languague-picker"
          }
        >
          🇻🇳
        </span>
        <span
          onClick={() => {
            setLanguage("US");
            setIsLa("US");
          }}
          className={
            la === "US" ? "languague-picker selected" : "languague-picker"
          }
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
