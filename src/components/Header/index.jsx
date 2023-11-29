import logo from '../../assets/portfolio-logo.svg'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 98%;
    // border-bottom: 1px solid black;
`

const NavBar = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`

const HomeLogo = styled.img`
    height: 250px;
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