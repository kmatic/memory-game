import styled from "styled-components";
import CardItem from "./CardItem";

const CardsGrid = ({ cards, onClick }) => {
    return (
        <div>
            <p> this is the cards </p>
            {cards.map(card => {
                return (
                    <CardItem
                        card={card}
                        onClick={onClick}
                    />    
                );
            })}
        </div>
    );
}

export default CardsGrid;