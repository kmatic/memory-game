import styled from "styled-components";
import CardItem from "./CardItem";

const GameOn = ({ cards, onClick}) => {
    return (
        <>
            {cards.map(card => {
                return (
                    <CardItem
                        card={card}
                        onClick={onClick}
                        key={card.id}
                    />    
                );
            })}
        </>
    );
}

const GameOver = ({ handleReset }) => {
    return (
        <>
            <h1>THE GAME IS OVER</h1>
            <button onClick={handleReset}>Restart</button>
        </>
    );
}

const GameWin = ({ handleReset }) => {
    return (
        <>
            <h1>YOU WON THE GAME</h1>
            <button onClick={handleReset}>Restart</button>
        </>
    );
}

const CardsGrid = ({ cards, onClick, gameOver, handleReset, winState }) => {
    if (winState) {
        return (
            <GameWinWrapper>
                <GameWin
                    handleReset={handleReset}
                />
            </GameWinWrapper>
        );
    }
    if (!gameOver) {
        return (
            <GameOnWrapper>
                <GameOn
                    cards={cards}
                    onClick={onClick}
                />
            </GameOnWrapper>
        );
    }
    return (
        <GameOverWrapper>
            <GameOver 
                handleReset={handleReset}
            />
        </GameOverWrapper>
    );
}

const GameOverWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
        font-size: 3rem;
    }

    button {
        padding: 10px 30px;
        font-size: 1.5rem;
        font-weight: bold;
        padding: 8px 25px;
        border-radius: 20px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover {
        background-color: black;
        color: white;
    }
`;

const GameOnWrapper = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    gap: 30px;
`;

const GameWinWrapper = styled(GameOverWrapper)`
`;

export default CardsGrid;