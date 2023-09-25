import logo from '../../assets/portfolio-logo.svg'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
    display: flex;
`

const NavBar = styled.div`
    display: flex;
    position: relative;
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
                <StyledLink to='/about'>
                    A Propos
                </StyledLink>
            </NavBar>
        </NavContainer>
    )
}

export default Header