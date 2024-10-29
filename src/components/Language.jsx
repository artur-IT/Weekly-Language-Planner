const Language = ({ switch: switchPL, updateLang }) => {
  const handleLanguageChange = () => updateLang(!switchPL);

  return (
    <div className="languages">
      <div className="tooltip">
        <img className="language_info" src="icon/question.svg" alt="question symbol" />
        <p className="tooltiptext">
          {!switchPL
            ? "Accurate Plan to learn your foreign language. Type in a brief statement of what you will be doing in chosing day e.g., listening to the radio, reading an article, fiche..."
            : "Dokładny plan nauki języka obcego. Wpisz krótki opis tego co będziesz robił/a w wybranym dniu np. słuchanie radia, czytanie artykułu, fiszki itp."}
        </p>
      </div>
      <img
        className="language_info"
        src={!switchPL ? "icon/en.png" : "icon/pl.png"}
        onClick={handleLanguageChange}
        alt={!switchPL ? "english language" : "polish language"}
      />
    </div>
  );
};

export default Language;
