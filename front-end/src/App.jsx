import DateForm from './DateForm';

// To-do :
//    styling for desktop

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
