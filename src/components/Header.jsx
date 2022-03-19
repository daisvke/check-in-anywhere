import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/colors'

const HeaderNav = styled.nav`
height: 13vh;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

const HeaderTitle = styled.h1`
color: ${colors.blue};
`

const HeaderLink = styled(Link)`
background-color: ${colors.blue};
padding: 0.1em;
color: white;
text-decoration: none;
`

function Header() {
    const dispatch = useDispatch()
    return (
        <HeaderNav>
            <HeaderLink to="/" onClick={dispatch({type:"resetPage"})}>HOME</HeaderLink>
            <HeaderTitle>CHECK IN ANYWHERE</HeaderTitle>
        </HeaderNav>
    )
}

export default Header