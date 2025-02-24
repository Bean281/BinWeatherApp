import { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }));
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  return time;
}

export default LiveClock;
