import { useEffect, useState } from "react";

function Countdown({ expiryDate }) {
  const [timeLeft, setTimeLeft] = useState(expiryDate - Date.now());

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 60000) % 60);
  const hours = Math.floor(timeLeft / 3600000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(expiryDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [expiryDate]);

  return (
    <>
      {hours >= 0 && minutes >= 0 && seconds >= 0 ? (
        <div className="de_countdown time__left">
          {hours}h {minutes}m {seconds}s
        </div>
      ) : (
        <div className="de_countdown time__left">sold</div>
      )}
    </>
  );
}

export default Countdown;
