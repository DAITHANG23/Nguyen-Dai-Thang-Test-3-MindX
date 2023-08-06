import React, { useState } from "react";
import "./Footer.css";

const Footer = ({ setLanguage }) => {
  return (
    <div>
      <h3>Made by MindX 🔥</h3>
      <div>
        <span>Available on:</span>

        <span
          onClick={() => {
            setLanguage("VN");
          }}
          className="languague-picker selected"
        >
          🇻🇳
        </span>
        <span
          onClick={() => {
            setLanguage("US");
          }}
          className="languague-picker selected"
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
