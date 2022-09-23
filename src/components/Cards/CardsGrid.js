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
            <p>THE GAME IS OVER</p>
            <button onClick={handleReset}>Play Again</button>
        </>
    );
}

const CardsGrid = ({ cards, onClick, gameOver, handleReset }) => {
    if (!gameOver) {
        return (
            <div>
                <p> this is the cards </p>
                <GameOn
                    cards={cards}
                    onClick={onClick}
                />
            </div>
        );
    }
    return (
        <div>
            <GameOver 
                handleReset={handleReset}
            />
        </div>
    );
}

export default CardsGrid;