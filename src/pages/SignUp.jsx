import GenerateSignUpInputField from '../components/SignUpInputField'
import axios from 'axios'
import globals from '../utils/globals'
import { useSelector } from 'react-redux'

function SignUp() {
    const name = useSelector((state) => state.signUp.name)
    const email = useSelector((state) => state.signUp.email)  
    const password = useSelector((state) => state.signUp.password)  

    function handleSubmit() {
    axios.post(String(globals.signUpBackendUrl), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          name: name,
          email: email,
          password: password
        }
    })
}

  return (
    <form onSubmit={handleSubmit}>
        {GenerateSignUpInputField('Name of the establishment', 'name')}
        {GenerateSignUpInputField('Email', 'email')}
        {GenerateSignUpInputField('Password', 'password')}
        {GenerateSignUpInputField('Confirm password', 'confPassword')}
        <input type="submit" value="Submit" />
    </form>
  )
}

export default SignUp
