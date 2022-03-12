import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

function Navigation() {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
    const totalPages = useSelector(state => state.totalPages)

    const FormNav = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `

    return (
        <FormNav>
            {(currentPage > 0) && <button onClick={() => {
                dispatch({ type: "prevPage" })
            }}>
                PREV
            </button>}
            {currentPage > 0 && (currentPage < totalPages) && <button onClick={() => {
                dispatch({ type: "nextPage" });
            }}>
                NEXT
            </button>}
        </FormNav>
    )
}

export default Navigation