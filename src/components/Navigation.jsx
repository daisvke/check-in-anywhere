import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import React from 'react'

function Navigation() {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
    const totalPages = useSelector(state => state.totalPages)
    const canvasRef = React.useRef({})

    return (
        <nav>
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
        </nav>
    )
}

export default Navigation