import logo from './logo.svg';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import { useState } from 'react';

function App() {
  function initialState() {
    console.log("Executig now");
    return 200;
  }
   
  const [n, setValueForIncrement] = useState(() => initialState());
  const incrementValue = () => {
    setValueForIncrement(n+1);
  } 

  return (
    <div className="App">
      <PersonalInfo name="Sagar" age="34"/>
      <PersonalInfo name="Sneha" age="33"/>
      <PersonalInfo name="Rocky" age="5"/>
      <PersonalInfo name="Vihaan" age="1"/>

      {/* Example of useState */}
      <div>
        <h2>Number : {n}</h2>
        <button onClick={incrementValue}>Increment Value</button>
      </div>

    </div>
  );
}

export default App;
