import './App.css'
import {sum} from "./Helper"
import Lottery from "./Lottery";

function App() {
  let winningCondition = (ticket) => {
    // return sum(ticket) === 15;
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0] === 0;
  };
  return (
    <>
     <Lottery n={2} winningCondition={winningCondition}/>
    </>
  )
}

export default App
