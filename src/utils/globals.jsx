const mode = 'prod'

const mainBlocWidth = 70
const headerHeight = 2
const mainBlocMarginTop = headerHeight + 2
//const url = mode === 'dev' ? "/" : "/check-in-anywhere/"
const url = "/check-in-anywhere/"

const globals = {
  mode: mode,
  url: url,
  fontFamily: 'Courier New, serif',
  fontSize: '.85em',
  headerHeight: String(headerHeight) + 'em',
  mainBlocMarginTop: String(mainBlocMarginTop) + 'em',
  mainBlocWidth: String(mainBlocWidth) + 'vw',
  mainBlocPaddingBottom: '5vh',
}

export default globals
