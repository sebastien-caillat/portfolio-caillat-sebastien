import logo from '../../assets/portfolio-logo.svg'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: -2%;
    @media(max-width: 768px) {
        flex-direction: column;
        margin-bottom: 0%;
    }
`

const NavBar = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    margin-right: 5.2%;
    @media(max-width: 768px) {
        justify-content: center;
        right: 4.5%
    }
`

const HomeLogo = styled.img`
    height: 250px;
    margin-left: 3%;
    @media(max-width: 1280px) {
        margin-left: 0%;
    }
`

function Header() {
    return(
        <NavContainer>
            <HomeLogo src={logo} alt='logo-portfolio' />
            <NavBar>
                <StyledLink to='/'>
                    Accueil
                </StyledLink>
                <StyledLink onClick={() => { window.location.href = 'https://www.docdroid.net/6PjO6Pt/cv-caillat-sebastien-pdf' } }>
                    CV
                </StyledLink>
            </NavBar>
        </NavContainer>
    )
}

export default Header