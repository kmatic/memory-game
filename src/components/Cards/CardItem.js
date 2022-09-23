import styled from "styled-components";

const CardItem = ({ card, onClick}) => {
    return (
        <Div onClick={() => onClick(card.id)}>
            <img src={card.img} alt={card.name} />
           <p>{card.name}</p>
        </Div>
    );
}

const Div = styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;

    > img {
        height: 100px;
        widht: 100px;
    }
`;

export default CardItem