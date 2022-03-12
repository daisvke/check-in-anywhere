import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
    const HeaderNav = styled.nav`
        height: 13vh;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: #00a9ff;
    `
    return (
        <HeaderNav>
            <Link to="/">HOME</Link>
            <h1>CHECK IN ANYWHERE</h1>
        </HeaderNav>
    )
}

export default Header