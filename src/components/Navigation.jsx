import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import globals from '../utils/globals'

const FormNav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
position: fixed;
top: 35vh;
width: ${globals.navBlocWidth};
`

const FormButton = styled.button`
background-color: ${colors.pink};
padding: .3em;
margin-left: 1em;
font-weight: 600;

&:hover {
    opacity: .7;
}
`

function Navigation() {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
    const totalPages = useSelector(state => state.totalPages)

    return (
        <FormNav>
            {(currentPage > 0)
                && <FormButton onClick={() => {
                dispatch({ type: "prevPage" })
            }}>
                &lt;
            </FormButton>}
            {currentPage > 0 && (currentPage < totalPages)
                && <FormButton onClick={() => {
                dispatch({ type: "nextPage" });
            }}>
                &gt;
            </FormButton>}
        </FormNav>
    )
}

export default Navigation