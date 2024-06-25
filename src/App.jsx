import Header from "./Components/Header";
import Results from "./Components/Results";
import UserInput from "./Components/UserInput";
import { useState } from "react";
function App() {
  const [User1Input, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = User1Input.duration > 0;


  function handleUserInput(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +
          newValue
      };
    });
  }


  return (<>
    <Header />
    <UserInput userInput={User1Input} onChangeInput={handleUserInput} />
    {inputIsValid ? <Results input={User1Input} /> : <p className="center">The input is not valid</p>}


  </>
  );
}

export default App
