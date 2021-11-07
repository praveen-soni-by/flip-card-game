import React from 'react'
import FRONT from '../assets/images/front.jpg'

export default function Card(props) {
    const {cards, cardImage, selectedCard, selectedCards, index} = props;


    return (
        <div class="item scene " onClick={() => selectedCards(index, cardImage.id)}>
            <div class={`card ${cards.indexOf(index) !== -1 || selectedCard.findIndex(data => data?.index === index) !== -1 ? 'is-flipped' : ' shake'}`}>
                <div class="card__face card__face--back ">
                    <img width='100%' 
                      className='center'
                    height='100%' src={cardImage.img} alt="back" />
                </div>
                <div class="card__face card__face--front">
                    <img width='100%' alt="front" height='100%'
                        src={FRONT}
                    />
                </div>
            </div>
        </div>
    )
}
