import { createContext, useEffect, useState } from "react";
import { dataApp } from "../components/data";

const appContext = createContext();

export function AppContextProvider({ children }) {
  const [appData, setAppData] = useState(dataApp);
   // Set your target launch date and time
   const targetDate = new Date('2023-09-26T09:00:00Z').getTime();
    // Initialize state variables
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      // Launch date has passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = { appData, setAppData, timeRemaining };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export default appContext;
