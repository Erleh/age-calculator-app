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
  )
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
  )
}

function DateForm() {
  return (
    <form>
      <DateInputs />
      <input type="submit"></input>
    </form>
  )
}

// To-do:
//  Styling
//  Calculation
function Result({display, idName}) {
  return (
    <li id={idName}>
      <span>--</span> {display}
    </li>
  )
}

function Results() {
  return (
    <ul>
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
  )
}

// To-do:
// Should style card here
function Calculator() {
  return (
    <div className="container card">
      <DateForm />
      <Results />
    </div>
  )
}

function App() {
  return (
    <Calculator />
  )
}

export default App
