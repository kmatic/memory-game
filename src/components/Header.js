import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>Anime MC Memory Game</h1>
            <h4>Pick each character only once!</h4>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    background-color: var(--dark);
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export default Header;