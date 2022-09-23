import styled from "styled-components";

const CardItem = ({ card, onClick}) => {
    return (
        <Div onClick={() => onClick(card.id)}>
           <p>{card.id}</p>
        </Div>
    );
}

const Div = styled.div`
    width: 100px;
    height: 100px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`;

export default CardItem