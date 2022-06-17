import { useSelector } from "react-redux"

function ProgressBar() {

const currentPage = useSelector(state => state.currentPage)
  return (currentPage > 0 &&
    <svg width="37.122vw">
      <rect x="20" y="20" width="350" height="1" />
      <circle
        cx="20"
        cy="20"
        r="10"
        stroke="black"
        stroke-width="1"
        fill={currentPage === 1 ? 'red' : 'white'}
      />
      <circle
        cx="90"
        cy="20"
        r="10"
        stroke="black"
        stroke-width="1"
        fill={currentPage === 2 ? 'red' : 'white'}
      />
      <circle
        cx="160"
        cy="20"
        r="10"
        stroke="black"
        stroke-width="1"
        fill={currentPage === 3 ? 'red' : 'white'}
      />
      <circle
        cx="230"
        cy="20"
        r="10"
        stroke="black"
        stroke-width="1"
        fill={currentPage === 4 ? 'red' : 'white'}
      />
      <circle
        cx="300"
        cy="20"
        r="10"
        stroke="black"
        stroke-width="1"
        fill={currentPage === 5 ? 'red' : 'white'}
      />
      <circle
        cx="370"
        cy="20"
        r="10"
        stroke="black"
        stroke-width="1"
        fill={currentPage === 6 ? 'red' : 'white'}
      />
    </svg>
  )
}

export default ProgressBar