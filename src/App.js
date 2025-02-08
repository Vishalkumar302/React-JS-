//import logo from './logo.svg';
import './App.css';

function App(){
  function apple()
  {
    alert("function called");
  }
  
  return(
    <div className="App">
      <h1>Hello World !</h1>
      <button onClick={apple}>Click me</button>
      </div>
  );
}
export default App;