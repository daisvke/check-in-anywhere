import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import SignUp from './SignUp'

const HomeDiv = styled.div`
  display: flex;
  flex-direciton: column;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: 100vw;
`
const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 1em;
  font-weight: 500;
  color: white;
  background-color: red;

  &:hover {
    opacity: 0.7;
  }
`

const HomeSpan = styled.span`
  display: inline-block;
  padding: 0.6em;
  transition: 0.3s ease-in;

  &:hover {
    transform: translatey(-10%);
  }
`

const SignInLink = styled(Link)`
text-decoration: none;
font-size: 1em;
font-weight: 500;
color: white;
background-color: red;

&:hover {
  opacity: 0.7;
}
`

function Home() {
  const dispatch = useDispatch

  dispatch({
    type: 'setEnv',
    payload: {
      name: 'submitted',
      value: false,
    },
  })

  return (
    <HomeDiv>
      
    <div>
      <SignUp />
      <SignInLink to=""><span>Sign In</span></SignInLink>
      </div>

      <HomeLink to="./check-in">
        <HomeSpan>START CHECK-IN !</HomeSpan>
      </HomeLink>

    </HomeDiv>
  )
}

export default Home
