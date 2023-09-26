import './App.css'

// Breaks down the provided design into React Components
// Individual inputs within a submission type form, and the results from the calculation

// To-do :
//    styling
//    age calculation
//    verify inputs for day, month, and year input
//    responsiveness to:
//      invalid input
//      submission
//      hover state of:
//        input
//        button
//    Change style for larger screens --> currently mobile first

function Input({display, inputName}) {
  return (
    <li className="container">
      <label htmlFor={inputName}>{display}</label>
      <input id={inputName} type="number"></input>
    </li>
  );
}

// To-do:
//  Input validation
//  Submit data into calculation
//  Responsiveness
function DateInputs() {
  return (
    <ul className="container">
      <Input 
        display={"day"}
        inputName={"day"}
      />
      <Input 
        display={"month"} 
        inputName={"month"}
      />
      <Input 
        display={"year"} 
        inputName={"year"}
      />
    </ul>
  );
}

// To-do: position hr correctly to match style
function InputButton() {
  return (
    <>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
      </button>
    </>
  );
}

function Divider() {
  return (
    <>
      <div className="divider">
        <hr />
        <InputButton />
      </div>
    </>
  )
}

function DateForm() {
  return (
    <form>
      <DateInputs />
      <Divider />
    </form>
  );
}

// To-do:
//  Styling
//  Calculation
function Result({display, idName}) {
  return (
    <li id={idName}>
      <span>--</span> {display}
    </li>
  );
}

function Results() {
  return (
    <ul className="container results">
      <Result 
        display={"years"}
        idName={"years-res"} 
      />
      <Result 
        display={"months"}
        idName={"months-res"}
      />
      <Result 
        display={"days"} 
        idName={"days-res"}
      />
    </ul>
  );
}

// To-do:
// Should style card here
function Calculator() {
  return (
    <div className="container card">
      <DateForm />
      <Results />
    </div>
  );
}

function App() {
  return (
    <Calculator />
  );
}

export default App