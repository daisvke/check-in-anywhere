import GenerateSignUpInputField from '../components/SignUpInputField'
import axios from 'axios'
import globals from '../utils/globals'
import { useDispatch, useSelector } from 'react-redux'

function SignUp() {
  const dispatch = useDispatch()
  const timestamp = new Date().toLocaleString()
  const name = useSelector((state) => state.signUp.name)
  const email = useSelector((state) => state.signUp.email)
  const password = useSelector((state) => state.signUp.password)
  const confPassword = useSelector((state) => state.signUp.confPassword)
  const error = useSelector((state) => state.error)
  const signedIn = useSelector((state) => state.signIn)

  const handleSubmit = (event) => {
    event.preventDefault()

    const onFulfilled = (response) => {
      console.log(response)
      // Once new user is created, redirect to Sign in page
      dispatch({
        type: 'setEnv',
        payload: {
          name: 'signedIn',
          value: true,
        }
      })
    }

    const onRejected = (response) => {
      console.log(response)
    }

    // Send data to php file and new create user on database
    axios.post(globals.signUpBackEndUrl, {
      data: {
        timestamp:timestamp,
        name: name,
        email: email,
        password: password,
      },
    })
    .then(response => { onFulfilled(response) },
          response => { onRejected(response) })
  }

  return (
      !signedIn && <form onSubmit={handleSubmit}>

      <span>OR SIGN UP:</span>

      {GenerateSignUpInputField('Name of the establishment', 'name')}
      {GenerateSignUpInputField('Email', 'email')}
      {GenerateSignUpInputField('Password', 'password')}
      {GenerateSignUpInputField('Confirm password', 'confPassword')}
      {name && email && password && confPassword && error === false && (
        <input type="submit" value="Submit" />
      )}
    </form>
  )
}

export default SignUp
