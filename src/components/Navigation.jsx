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

    const FormButton = styled.button`
        color: white;
        background-color: #e8b7db;
        padding: .3em;
        border-radius: 30px;
        font-weight: 600;
        &:hover {
            opacity: .7;
        }
    `

    return (
        <FormNav>
            {(currentPage > 0) && <FormButton onClick={() => {
                dispatch({ type: "prevPage" })
            }}>
                PREV
            </FormButton>}
            {currentPage > 0 && (currentPage < totalPages) && <FormButton onClick={() => {
                dispatch({ type: "nextPage" });
            }}>
                NEXT
            </FormButton>}
        </FormNav>
    )
}

export default Navigation