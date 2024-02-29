import { useRef } from "react";

const Language = (props) => {
  // console.log(props.daysName);
  const plRef = useRef();
  const enRef = useRef();

  const langButton = () => {
    const pl = plRef.current;
    const en = enRef.current;
    // console.log(pl, en);
  };

  return (
    <>
      <div className="languages">
        <div className="tooltip">
          <img className="" src="icon/question.svg" alt="question symbol" />
          <p className="tooltiptext">
            Accurate Plan to learn your foreign language. <br />
            Type in a brief statement of what you will be doing, e.g., listening to the radio, reading an article, fiche, ...
          </p>
        </div>
        <img src="icon/pl.png" ref={plRef} onClick={langButton} alt="polish language" />
        <img src="icon/en.png" ref={enRef} onClick={langButton} alt="english language" />
      </div>
    </>
  );
};

export default Language;
