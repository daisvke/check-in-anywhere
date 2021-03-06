const mode = 'prod'

const mainBlocWidth = 70
const headerHeight = 2
const mainBlocMarginTop = headerHeight + 2
const url = '/'

const backendUrl =
  mode === 'dev' ? 'http://127.0.0.1:8888/index.php' : 'backend/index.php'

const SignUpBackEndUrl =
  mode === 'dev' ? 'http://127.0.0.1:8888/sign_up.php' : 'backend/sign_up.php'

const globals = {
  mode: mode,
  url: url,
  backendUrl: backendUrl,
  SignUpBackEndUrl: SignUpBackEndUrl,
  fontFamily: 'Courier New, serif',
  fontSize: '.85em',
  headerHeight: String(headerHeight) + 'em',
  mainBlocMarginTop: String(mainBlocMarginTop) + 'em',
  mainBlocWidth: String(mainBlocWidth) + 'vw',
  mainBlocPaddingBottom: '5vh',
}

export default globals
