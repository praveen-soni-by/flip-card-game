import React from 'react';
import Card from '../components/Card';
import Sound from "../data/Sound";

const COUNTER = 180;

function GameBoard(props) {
  const [cards, setCards] = React.useState([]);
  const [counter, setCounter] = React.useState(COUNTER);
  const [selectedCard, setSelectedCard] = React.useState([]);
  const [isPlaying, setPlaying] = React.useState(false);


  React.useEffect(() => {
    if (isPlaying) {
      Sound.BackGroundSound.play()
    } else {
      Sound.BackGroundSound.pause()
    }
  }, [isPlaying]);


  const selectedCards = (index, cardId) => {
    if (selectedCard.findIndex(data => data?.index === index) === -1 && selectedCard.length !== 2) {
      Sound.Flip.play();
      setSelectedCard([...selectedCard, { index, cardId }]);
    }

  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    if (counter === 0) {
      checkResult();
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [counter]);

  function checkResult() {

    if (cards.length !== 12) {
      Sound.looser.play();
      alert(" You lost");
      reset();
    } else {
      Sound.winner.play();
      alert(" You Won the Game");
      reset();
    }
    setSelectedCard([]);
    setCards([]);

  }

  React.useEffect(() => {

    if (selectedCard.length === 2) {
      if (selectedCard[0].cardId === selectedCard[1].cardId) {
        Sound.matchCard.play();
        setCards([...cards, selectedCard[0].index, selectedCard[1].index])
      }
      setTimeout(() => { setSelectedCard([]) }, 1200)
    }
  }, [selectedCard, cards])

  const reset = () => {
    Sound.BackGroundSound.stop()
    setSelectedCard([]);
    setPlaying(false)
    setCards([]);

    setCounter(COUNTER);
    props.start();
  }

  return (
    <div className="container">
      <div class="container-card">

        {props.cardData?.map((cardImage, index) => (
          <Card
            key={cardImage.id + index}
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
        <button class="button" onClick={() => setPlaying(!isPlaying)}>{isPlaying ?

          <i class="icon fa fa-volume-off"></i> : <i class="icon fa fa-volume-up"></i>}</button>
        <span class="counter"> {counter} </span>
      </div>
    </div>
  );
}

export default GameBoard;
