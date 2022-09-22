import styled from "styled-components";

const Scoreboard = ({ currentScore, highScore }) => {
    return (
        <div>
            <p>this is the score</p>
            <p>Current: {currentScore}</p>
            <p>High: {highScore}</p>
        </div>
    );
}

export default Scoreboard