import logo from '../../assets/portfolio-logo.svg'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 98%;
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
                <StyledLink to='/about'>
                    CV
                </StyledLink>
            </NavBar>
        </NavContainer>
    )
}

export default Header