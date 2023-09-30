import DateForm from './DateForm';

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
