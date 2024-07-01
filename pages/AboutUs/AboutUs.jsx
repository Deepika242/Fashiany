import React, { useEffect } from "react";
import "./style.css";

import { MdEmail } from "react-icons/md";

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="author-page">
      <h1>Kristyna Novakova</h1>
      <div className="author-info">
        <div className="about">
          <h2>Information about the author</h2>
          <p>
            fashion is the most general term and applies to any way of dressing,
            behaving, writing, or performing that is favored at any one time or
            place. style often implies a distinctive fashion adopted by people
            of taste. mode suggests the fashion of the moment among those
            anxious to appear elegant and sophisticated.
          </p>
          <h2>Link to other</h2>
          <ul>
            <li>
              <MdEmail />
              <a href="mailto:novakovkri@gmail.com">novakovkri@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="author-picture"></div>
      </div>
    </div>
  );
};
