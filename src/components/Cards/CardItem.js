import styled from "styled-components";

const CardItem = ({ card, onClick}) => {
    return (
        <Div onClick={() => onClick(card.id)}>
            <img src={card.img} alt={card.name} />
            <div>
                <h3>{card.name}</h3>
            </div>
        </Div>
    );
}

const Div = styled.div`
    justify-self: center;
    align-self: start;
    width: 280px;
    height: 350px;
    border-radius: 15px;
    background-color: #BEC6D6;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 11px;
    cursor: pointer;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;

    :hover {
        transform: scale(1.05)
    }

    > img {
        height: 265px;
        max-width: 265px;
        margin: 5px;
        border-radius: 15px;
    }

    > div {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }

    > div > h3 {
        font-size: 1.5rem;
        font-weight: 500;
    }
`;

export default CardItem