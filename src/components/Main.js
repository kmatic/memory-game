import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Scoreboard from './Scoreboard/Scoreboard';
import CardsGrid from './Cards/CardsGrid';

const Main = () => {
    const cardsData = [
        {id: 1, clicked: false},
        {id: 2, clicked: false},
        {id: 3, clicked: false},
        {id: 4, clicked: false},
    ];

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(2);
    const [cards, setCards] = useState(cardsData);
    const [gameOver, setGameOver] = useState(false);

    const handleHighscore = () => { // checks if new high-score with each update
        setHighScore(() => {
            if (currentScore > highScore) {
                return currentScore;
            }
            return highScore;
        });
    }

    const handleCardShuffle = () => { // shuffle cards using Fisher-Yates method
        let cardsCopy = cards;
        let currentIndex = cards.length;
        let randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [cardsCopy[currentIndex], cardsCopy[randomIndex]] = [
                cardsCopy[randomIndex], cardsCopy[currentIndex]];
        }

        setCards(cardsCopy);
    }

    const handleReset = () => {

    }

    const handleCardClick = (id) => {
        setGameOver(() => {
            for (const card of cards) {
                if (card.id === id && card.clicked === true) {
                    return true;
                }
            }
            return false;
        });

        setCurrentScore(() => {
            for (const card of cards) {
                if (card.id === id && card.clicked === false) {
                    card.clicked = true;
                    return (currentScore + 1);
                }
            }
            return currentScore;
        });
    }

    useEffect(() => {
        handleHighscore();
        handleCardShuffle();
    })

    return (
        <MainWrapper>
            <Scoreboard
                currentScore={currentScore}
                highScore={highScore}
            />
            <CardsGrid
                cards={cards}
                onClick={handleCardClick}
                gameOver={gameOver}
            />
        </MainWrapper>
    );
}

const MainWrapper = styled.div`

`;

export default Main;