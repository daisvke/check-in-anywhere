import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import globals from '../utils/globals'

const HeaderNav = styled.nav`
position: fixed;
top: 0;
height: ${globals.headerHeight};
width: 100vw;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: black;
`

const HeaderTitle = styled.h1`
color: white;
font-size: 1.2em;
`

const HeaderLink = styled(Link)`
padding: 0.1em;
color: white;
text-decoration: none;
`

function Header() {
    const dispatch = useDispatch()
    return (
        <HeaderNav>
            <HeaderTitle>CHECK-IN ANYWHERE</HeaderTitle>
            <HeaderLink to={globals.url} onClick={() => dispatch({type:"resetPage"})}>HOME</HeaderLink>
        </HeaderNav>
    )
}

export default Header