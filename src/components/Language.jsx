/* eslint-disable react/prop-types */
import { useRef } from "react";

const Language = (props) => {
  const plRef = useRef();
  const enRef = useRef();

  const langButton = () => {
    // const pl = plRef.current;
    // const en = enRef.current;
    const lang = props.switch;
    props.updateLang(!lang);
  };

  return (
    <>
      <div className="languages">
        <div className="tooltip">
          <img className="" src="icon/question.svg" alt="question symbol" />
          <p className="tooltiptext">
            {!props.switch
              ? "Accurate Plan to learn your foreign language. Type in a brief statement of what you will be doing, e.g., listening to the radio, reading an article, fiche..."
              : "Dokładny plan nauki języka obcego. Wpisz krótki opis tego, co będziesz robić, np. słuchanie radia, czytanie artykułu, fiszki."}
          </p>
        </div>
        {props.switch ? (
          <img src="icon/en.png" ref={enRef} onClick={langButton} alt="english language" />
        ) : (
          <img src="icon/pl.png" ref={plRef} onClick={langButton} alt="polish language" />
        )}
      </div>
    </>
  );
};

export default Language;
