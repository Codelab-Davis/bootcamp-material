import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 
import CountDisplay from './countDisplay';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

function App() {

  const [count, setCount] = useState(0);
  
  let myButtonMessage = "Click Me!";

  function myClickFunction(param1) { 
    console.log("You just clicked my button!", param1); 
  }

  const [date, setDate] = useState(new Date());

  function onChange(date) {
    setDate(date);
  }
  
  return (
    <div>
      <button className="myCSSClass" onClick={() => myClickFunction("some parameter")}>{myButtonMessage}</button>
      <button onClick={() => setCount(count + 1)}>Click me to update the count!</button>
      <CountDisplay count={count} />
      <DayPickerInput onDayChange={onChange} />
    </div>
  );
}

export default App;
