const mode = 'dev'

const mainBlocWidth = 70
const headerHeight = 2
const mainBlocMarginTop = headerHeight + 2
const url = '/'

const backendUrl =
  mode === 'dev'
    ? 'http://127.0.0.1:8888/backend/check_in.php'
    : 'backend/check_in.php'

const signUpBackEndUrl =
  mode === 'dev'
    ? 'http://127.0.0.1:8888/backend/sign_up.php'
    : 'backend/sign_up.php'

const signInBackEndUrl =
  mode === 'dev'
    ? 'http://127.0.0.1:8888/backend/sign_in.php'
    : 'backend/sign_in.php'

const globals = {
  mode: mode,
  url: url,
  backendUrl: backendUrl,
  signUpBackEndUrl: signUpBackEndUrl,
  signInBackEndUrl: signInBackEndUrl,
  fontFamily: 'Courier New, serif',
  fontSize: '.85em',
  headerHeight: String(headerHeight) + 'em',
  mainBlocMarginTop: String(mainBlocMarginTop) + 'em',
  mainBlocWidth: String(mainBlocWidth) + 'vw',
  mainBlocPaddingBottom: '5vh',
}

export default globals
