import { useRef } from "react";

const Language = (props) => {
  // console.log(props.daysName);
  const daysPL = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
  const habitsPL = ["MÓWIENIE", "CZYTANIE", "PISANIE", "SŁUCHANIE", "SŁOWNICTWO"];
  const plRef = useRef();
  const enRef = useRef();

  const langButton = () => {
    const pl = plRef.current;
    const en = enRef.current;
    // console.log(pl, en);
    props.daysName = daysPL;
  };

  return (
    <>
      <div className="languages">
        <div className="tooltip">
          <img className="" src="./src/icon/question.svg" alt="question symbol" />
          <p className="tooltiptext">Zaplanuj naukę języka obcego, którego chcesz się nauczyć.</p>
        </div>
        <img src="./src/icon/pl.png" ref={plRef} onClick={langButton} alt="polish language" />
        <img src="./src/icon/en.png" ref={enRef} onClick={langButton} alt="english language" />
      </div>
    </>
  );
};

export default Language;
