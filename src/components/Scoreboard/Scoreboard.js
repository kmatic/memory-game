import styled from "styled-components";

const Scoreboard = ({currentScore, highScore, onClick}) => {
    return (
        <div>
            <p>this is the score</p>
            <p>Current: {currentScore}</p>
            <p>High: {highScore}</p>
            <button onClick={() => onClick()}>Increment</button>
        </div>
    );
}

export default Scoreboard