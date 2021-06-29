import '../App.css';
import { useState } from 'react';
import { Year } from './Year';

export default function App() {
  const [currentYear, setYear] = useState(new Date().getFullYear());
  const handleYearChange = (newValue) => {
    setYear(newValue);
  };
  return (
    <div className="App">
      <Year year={currentYear} onYearChange={handleYearChange}></Year>
    </div>
  );
}
