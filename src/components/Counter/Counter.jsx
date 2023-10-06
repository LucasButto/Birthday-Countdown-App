import { useState, useEffect } from "react";
import { useBirthdaysLogic } from "../../Hooks/useBirthdaysLogic";
import Confetti from "../Confetti/Confetti";

import "./Counter.css";

const Counter = () => {
  const { curYearBirthdays, timeUntilNextBirthday } = useBirthdaysLogic();
  const nextBirthday = curYearBirthdays[0];
  const countdownNextBirthday = timeUntilNextBirthday(nextBirthday);
  const [timeRemaining, setTimeRemaining] = useState(countdownNextBirthday);
  const curDate = new Date();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(timeUntilNextBirthday(nextBirthday));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [nextBirthday, timeUntilNextBirthday]);

  return (
    <>
      {curDate.toLocaleDateString("es-ES") ===
      nextBirthday.date.toLocaleDateString("es-ES") ? (
        <>
          <Confetti />
          <div className="counter">
            <p className="bd-text">¡FELIZ CUMPLE!</p>
            <p className="celebration-text">
              {`Felices ${curDate.getFullYear() - nextBirthday.bornYear} ${
                nextBirthday.name
              }`}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="counter">
            <h2 className="title">Próximo Cumpleaños:</h2>
            <h2 className="name">{nextBirthday.name}</h2>
            <p className="date">
              {nextBirthday.date.toLocaleDateString("es-ES")}
            </p>
            <p className="timer">
              {timeRemaining.days}
              <span className="format">d</span>:{timeRemaining.hours}
              <span className="format">h</span>:{timeRemaining.minutes}
              <span className="format">m</span>:{timeRemaining.seconds}
              <span className="format">s</span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Counter;
