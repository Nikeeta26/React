import './App.css';
import Title from "./Title.jsx";

function Description(){
  return <h3> I am the description</h3>
}

function App(){
  return(
    <div>
       <h1>this is my app component</h1>
       <p>inside app copmponent we have:</p>
      <Title />
      <Description/>
    </div>
  );
}

export default App;
