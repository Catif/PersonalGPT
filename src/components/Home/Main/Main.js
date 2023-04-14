import "./Main.scss";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Main() {
  const [scroll, setScroll] = useState(0);
  const scrollElement = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  useEffect(() => {
    if (scroll > 0) {
      scrollElement.current.style.opacity = 0;
    } else {
      scrollElement.current.style.opacity = 1;
    }
  }, [scroll]);

  return (
    <div className="Home__main">
      <h1 className="Home__main__title">
        Welcome to <span className="mainColor">PersonalGPT</span>
      </h1>
      <h2 className="Home__main__subtitle">
        Simple web app that allows you to chat with GPT with your own API key.
      </h2>
      <Link to="/presets" className="Home__main__button">
        Use PersonalGPT <i className="fa-solid fa-play"></i>
      </Link>

      <div className="Home__main__scroll">
        <div ref={scrollElement} className="Home__main__scroll__arrow">
          <i className="fa-solid fa-angles-down"></i>
        </div>
      </div>
    </div>
  );
}
