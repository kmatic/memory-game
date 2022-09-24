import styled from "styled-components";

const Scoreboard = ({ currentScore, highScore }) => {
    return (
        <ScoreboardWrapper>
            <ScoreWrapper primary>
                <h3>Current Score: {currentScore}</h3>
            </ScoreWrapper>
            <ScoreWrapper>
                <h3>High-Score: {highScore}</h3>
            </ScoreWrapper>
        </ScoreboardWrapper>
    );
}

const ScoreboardWrapper = styled.div`
    display: flex;
    gap: 40px;
`;

const ScoreWrapper = styled.div`
    background-color: ${props => props.primary ?
    'lightgreen' : 'lightcoral'};
    padding: 8px 25px;
    border-radius: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    > h3 {
        font-weight: 500;
    }
`;

export default Scoreboard