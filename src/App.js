
import './App.css';
import { useState } from "react";
import Result from './component/Result';
import UserInput from './component/UserInput';
import Header from './component/header';

function App() {

  const [userinput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newvalue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newvalue

      }
    });


  }
  const validInput = userinput.duration >= 1;

  return (<>
    <Header />
    <UserInput OnChange={handleChange} userinput={userinput} />
    {validInput && <Result input={userinput} />}
    {!validInput && <p className='center'>Please Enter Duration 1 or greater NUmber</p>}



  </>

  );
}

export default App;

