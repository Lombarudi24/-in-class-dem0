
import './App.css';

function App() {

console.log(process.env)
  return (
    <div className="App">
      Simple react
      <div>Current Env: {process.env.NODE_ENV}</div>
      <div>Current API {process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEVELOPMENT_API_KEY 
        : process.env.REACT_APP_DEVELOPMENT_API_KEY}</div>
    </div>
  );
}

export default App;
