import logo from '../../assets/portfolio-logo.png'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 800px;
    background: linear-gradient(to bottom right, #d7d2cc 0%, #304352 100%);
    margin-bottom: 2%; 
    @media(max-width: 1280px) {
        height: 600px;
    }
    @media(max-width: 768px) {
        height: 500px;
        flex-direction: column;
        align-items: center;
    }
`

const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-top: 2%;
    margin-left: 7%;
    @media(max-width: 768px) {
        align-items: center;
        margin-left: 0%;
    }
`

const HomeLogo = styled.img`
    height: 425px;
    position: relative;
    top: 24%;
    margin-right: 7%;
    @media(max-width: 1280px) {
        height: 300px;
    }
    @media(max-width: 768px) {
        width: 150px;
        height: 200px;
        margin-right: 0%;
        margin-bottom: 3%;
        top: 0%;
    }
`

function Header() {
    return(
        <NavContainer>
            <HomeLogo src={logo} alt='logo-portfolio' />
            <NavBar>
                <StyledLink to='/'>
                    ACCUEIL
                </StyledLink>
                <StyledLink to='realisations'>
                    REALISATIONS
                </StyledLink>
                <StyledLink onClick={() => { window.location.href = 'https://sebastien-caillat.tiiny.site/' } }>
                    CV
                </StyledLink>
            </NavBar>
        </NavContainer>
    )
}

export default Header