import { useEffect, useState } from "react";
export default function Joker(){
    let[joke, setJoke] = useState({});
    const URL = "https:official-joke-api.appspot.com/random_joke"; 
    const getJokes = async()=>{
       let res = await fetch(URL);
       let data = await res.json();
       console.log(data);
       setJoke({setup:data.setup, punchline:data.punchline});
    };

useEffect(()=> {
    async function geFirstJoke(){
    let res = await fetch(URL);
       let data = await res.json();
       console.log(data);
      return setJoke({setup:data.setup, punchline:data.punchline});
}
   geFirstJoke();
},[]);
    return(
        <div>
            <h3>Joker</h3>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getJokes}>New JOke</button>
        </div>
    )
}