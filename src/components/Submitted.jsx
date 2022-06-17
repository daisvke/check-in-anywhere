import styled from 'styled-components'

const EndText = styled.p`
  font-family: Tahoma, sans-serif;
  text-align: center;
  margin-bottom: 5em;
`

function Submitted() {
  return (
    <EndText>
      Thank you, your check-in is complete!
      <br />
      We are looking forward to seeing you at the Hotel!
    </EndText>
  )
}

export default Submitted
