import React from 'react';
import Card from '../components/Card';
import useAudio from '../hooks/useAudio';

const COUNTER = 180;

function GameBoard(props) {
  const [cards, setCards] = React.useState([]);
  const [counter, setCounter] = React.useState(COUNTER);

  const [selectedCard, setSelectedCard] = React.useState([]);
  const [playing, toggle] = useAudio("./assets/sound/card-flip.mp3");

  const selectedCards = (index, cardId) => {
    toggle();
    if (selectedCard.findIndex(data => data?.index === index) === -1 && selectedCard.length !== 2) {
      setSelectedCard([...selectedCard, { index, cardId }]);
      toggle();
    }

  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    if (counter == 0) {
      checkResult();
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [counter]);

  function checkResult() {

    if (cards.length !== 12) {
      alert(" You lost");
    } else {
      alert(" You Won the Game");
    }
    setSelectedCard([]);
    setCards([]);

  } React.useEffect(() => {

    if (selectedCard.length === 2) {
      if (selectedCard[0].cardId === selectedCard[1].cardId) {
        setCards([...cards, selectedCard[0].index, selectedCard[1].index])
      }
      setTimeout(() => { setSelectedCard([]) }, 1200)
    }
  }, [selectedCard, cards])

  const reset = () => {
    setSelectedCard([]);
    setCards([]);
    setCounter(COUNTER);
    props.start();
  }

  return (
    <div className="container">
      <div class="container-card">
        {props.cardData?.map((cardImage, index) => (
          <Card
            selectedCard={selectedCard}
            cardImage={cardImage}
            selectedCards={selectedCards}
            index={index}
            cards={cards}
          />
        )

        )}
      </div>
      <div class="container-button">
        <button onClick={reset} class="button"> Restart </button>
        <span class="counter"> {counter} </span>  </div>
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
 </div>
  );
}

export default GameBoard;
