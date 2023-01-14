import { useSelector } from 'react-redux'

function ProgressBar() {
  const currentPage = useSelector((state) => state.currentPage)

function getX(index) {
    var begin = index === 0 ? 12 : 0
    return String(index * (16 - begin) + 10) + "%"
}

  return (
    currentPage > 0 && currentPage < 7 && (
      <svg width="48.4%">
        <rect x="11%" y="12%" width="78%" height="1" />
        <circle
          cx={getX(0)}
          cy="13%"
          r="3.5%"
          stroke="black"
          fill={currentPage === 1 ? 'red' : 'white'}
        />
        <circle
          cx={getX(1)}
          cy="13%"
          r="3.5%"
          stroke="black"
          fill={currentPage === 2 ? 'red' : 'white'}
        />
        <circle
          cx={getX(2)}
          cy="13%"
          r="3.5%"
          stroke="black"
          fill={currentPage === 3 ? 'red' : 'white'}
        />
        <circle
          cx={getX(3)}
          cy="13%"
          r="3.5%"
          stroke="black"
          fill={currentPage === 4 ? 'red' : 'white'}
        />
        <circle
          cx={getX(4)}
          cy="13%"
          r="3.5%"
          stroke="black"
          fill={currentPage === 5 ? 'red' : 'white'}
        />
        <circle
          cx={getX(5)}
          cy="13%"
          r="3.5%"
          stroke="black"
          fill={currentPage === 6 ? 'red' : 'white'}
        />
      </svg>
    )
  )
}

export default ProgressBar
