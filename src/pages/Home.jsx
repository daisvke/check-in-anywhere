import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { useSelector, useDispatch } from 'react-redux'

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
  const signedIn = useSelector((state) => state.signedIn)

  dispatch({
    type: 'setEnv',
    payload: {
      name: 'submitted',
      value: false,
    },
  })

  return (
    // <HomeDiv>
    //   {signedIn === false &&
    //   <div>
    //     <SignIn />
    //     <SignUp />
    //   </div>}

    //  {signedIn === true && (
      <HomeDiv>
        <HomeLink to="./check-in">
          <HomeSpan>START CHECK-IN !</HomeSpan>
        </HomeLink>
      {/* )} */}
    </HomeDiv>
  )
}

export default Home
