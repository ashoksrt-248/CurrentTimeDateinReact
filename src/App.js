import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="App">
      <h1>Current Date & Time</h1>
      <h2> {date.toLocaleDateString()}</h2>
      <h2> {date.toLocaleTimeString()}</h2>
      <p>{date.toLocaleString()}</p>
    </div>
  );
}
