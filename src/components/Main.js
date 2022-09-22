import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Scoreboard from './Scoreboard/Scoreboard';
import Cards from './Cards/Cards';

const Main = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(10);
    // const [gameOver, setGameOver] = useState(false);

    const Handlehighscore = () => {
        setHighScore(() => {
            if (currentScore > highScore) {
                return currentScore;
            }
            return highScore;
        });
    }

    const Handlescore = () => {
        setCurrentScore(currentScore + 1);
    }

    useEffect(() => {
        Handlehighscore();
    })

    return (
        <MainWrapper>
            <Scoreboard
                currentScore={currentScore}
                highScore={highScore}
                onClick={Handlescore}
            />
            <Cards />
        </MainWrapper>
    );
}

const MainWrapper = styled.div`

`;

export default Main;