/* eslint-disable react/prop-types */
const Language = (props) => {
  const langButton = () => props.updateLang(!props.switch);
  localStorage.setItem("language", JSON.stringify(props.switch));

  return (
    <>
      <div className="languages">
        <div className="tooltip">
          <img className="" src="icon/question.svg" alt="question symbol" />
          <p className="tooltiptext">
            {!props.switch
              ? "Accurate Plan to learn your foreign language. Type in a brief statement of what you will be doing in chosing day e.g., listening to the radio, reading an article, fiche..."
              : "Dokładny plan nauki języka obcego. Wpisz krótki opis tego co będziesz robił/a w wybranym dniu np. słuchanie radia, czytanie artykułu, fiszki itp."}
          </p>
        </div>
        {props.switch ? (
          <img src="icon/en.png" onClick={langButton} alt="english language" />
        ) : (
          <img src="icon/pl.png" onClick={langButton} alt="polish language" />
        )}
      </div>
    </>
  );
};

export default Language;
