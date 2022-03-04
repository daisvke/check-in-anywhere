import { useDispatch } from 'react-redux';

function Navigation() {
    const dispatch = useDispatch();
    return (
        <nav>
            <button onClick={() => {
                dispatch({ type: "prevPage" })
            }}>
                PREV
            </button>
            <button onClick={() => {
                dispatch({ type: "nextPage" })
            }}>
                NEXT
            </button>
        </nav>
    )
}

export default Navigation