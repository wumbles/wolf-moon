import "./App.css";
import { Moon } from "lunarphase-js";
import { useState, useEffect } from "react";
import LoadingWipe from "./LoadingWipe";

function App() {
  const [moonVisible, setMoonVisible] = useState(false);
  const [quote, setQuote] = useState("");

  const getMoonPhase = () => {
    const currentPhase = Moon.lunarPhase() + " " + Moon.lunarPhaseEmoji();
    console.log(currentPhase);

    return (
      <>
        <div className="result-text">
          <h2>The 🐺 says...</h2>
          <h3>{currentPhase}</h3>
        </div>
      </>
    );
  };

  const getQuote = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
      },
    };

    const url =
      "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
    const response = await fetch(url, options);

    const data = await response.json();

    setQuote(data.text);
  };

  const showMoon = () => {
    setMoonVisible(true);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <LoadingWipe />
      <div className="button-text">
        <h4>{quote}</h4>

        <button
          onClick={() => {
            showMoon();
            // showQuote;
          }}
        >
          <h1>Ask for Moon Phase:</h1>
        </button>
      </div>
      {moonVisible && getMoonPhase()}
    </>
  );
}

export default App;
