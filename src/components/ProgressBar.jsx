import styled from 'styled-components'
import { useSelector } from "react-redux"

function ProgressBar() {
    const currentPage = useSelector(state => state.currentPage)

  return (currentPage > 0 &&
    <svg width="48.5%">
      <rect x="4%" y="12%" width="78%" height="1" />
      <circle
        cx="4%"
        cy="13%"
        r="3.5%"
        stroke="black"
        fill={currentPage === 1 ? 'red' : 'white'}
      />
      <circle
        cx="20%"
        cy="13%"
        r="3.5%"
        stroke="black"
        fill={currentPage === 2 ? 'red' : 'white'}
      />
      <circle
        cx="36%"
        cy="13%"
        r="3.5%"
        stroke="black"
        fill={currentPage === 3 ? 'red' : 'white'}
      />
      <circle
        cx="52%"
        cy="13%"
        r="3.5%"
        stroke="black"

        fill={currentPage === 4 ? 'red' : 'white'}
      />
      <circle
        cx="68%"
        cy="13%"
        r="3.5%"
        stroke="black"
        fill={currentPage === 5 ? 'red' : 'white'}
      />
      <circle
        cx="84%"
        cy="13%"
        r="3.5%"
        stroke="black"
        fill={currentPage === 6 ? 'red' : 'white'}
      />
    </svg>
  )
}

export default ProgressBar