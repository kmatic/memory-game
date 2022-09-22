import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Scoreboard from './Scoreboard/Scoreboard';
import CardsGrid from './Cards/CardsGrid';

const Main = () => {
    const cardsData = [
        {id: 1, clicked: true},
        {id: 2, clicked: false},
        {id: 3, clicked: false},
        {id: 4, clicked: false},
    ];

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(2);
    const [cards, setCards] = useState(cardsData);
    // const [gameOver, setGameOver] = useState(false);

    const handlehighscore = () => {
        setHighScore(() => {
            if (currentScore > highScore) {
                return currentScore;
            }
            return highScore;
        });
    }

    const handleCardClick = (id) => {
        setCurrentScore(() => {
            for (const card of cards) {
                if (card.id === id && card.clicked === false) {
                    card.clicked = true;
                    return (currentScore + 1);
                }
            }
            return currentScore;
        });
        // setCurrentScore(newScore);
    }

    useEffect(() => {
        handlehighscore();
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
            />
        </MainWrapper>
    );
}

const MainWrapper = styled.div`

`;

export default Main;