import styled from 'styled-components'

const EndText = styled.p`
  font-family: Tahoma, sans-serif;
  text-align: center;
  line-height: 2em;
`

function Submitted(props) {
  return (
    (
      props.success === true &&
      <EndText>
        Thank you, your check-in is complete!
        <br />
        We are looking forward to seeing you at the Hotel!
      </EndText>
    )
    || (
      props.success === false &&
      <EndText>
        An error occured!
      </EndText>
    )
  )
}

export default Submitted
