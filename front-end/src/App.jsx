import DateForm from './DateForm';

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

function Card({children}) {
  return (
    <div className="container card">
      { children }
    </div>
  );
}

function Calculator() {
  return (
    <Card>
      <DateForm />
    </Card>
  );
}

function App() {
  return (
    <Calculator />
  );
}

export default App
