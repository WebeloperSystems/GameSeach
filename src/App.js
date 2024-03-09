import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Game from './Game';
function App() {
  const [input, Setinput] = useState("");
  const [result, Setresult] = useState([]);
  const GameSearch = () => {
    if (input!=="") {
      axios.get(`https://www.freetogame.com/api/games/${input}`)
        .then(res => Setresult(res.data));
    }
  }
  useEffect(()=>{
   axios.get(`https://www.freetogame.com/api/games/${input}`)
    .then(res => Setresult(res.data));
  }, [input]);
  return (
    <div className="App">
      <input placeholder='Játék kersése' value={input} onChange={(e)=>Setinput(e.target.value)}/>
      <button onClick={GameSearch}>Keres</button>
      <div>
        {
          result.map((game)=>{
            return <Game id={game.id} title={game.title} thumbnail={game.thumbnail} short_description={game.short_description} developer={game.developer} release_date={game.release_date}/>
          })
        }
      </div>
    </div>
  );
}
export default App;
