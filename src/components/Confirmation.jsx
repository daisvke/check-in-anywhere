import { useSelector } from "react-redux"

function Confirmation() {
    const data = []
    data[0] = useSelector(state => state.questions.roomNumber)
    data[1] = useSelector(state => state.questions.mobile)
    data[2] = useSelector(state => state.questions.sign)

    return (
        <div>
            <ul>
                {data.map((element, index) => (
                <li>
                    { index !== 2 ? element : <img src={element} alt="signature" />}
                </li>
                ))}
            </ul>

            <button>confirm</button>
        </div>
    )
}

export default Confirmation