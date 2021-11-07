import React, { useState } from 'react';
import './App.css';
import GameBoard from './pages/GameBoard';
import Data from './data/Database';
import shuffle from "lodash.shuffle";

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function App() {
  const [data, setData] = useState([])

  React.useEffect(() => {
    setCardData();

  }, [])

  //Select cards based on index (0 -pokomon 1- naruto)
  const setCardData = () => {
    const cards = Data.CARD_DATA[randomIntFromInterval(1, 3)]
    const playing_card = shuffle(cards).slice(0, 6);
    const GAME_DATA = shuffle(Array.from({ length: 2 }, () => playing_card).flat().flat());
    setData(GAME_DATA);
  }

  return <GameBoard cardData={data} start={setCardData} />

}
export default App;
