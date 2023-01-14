import 'react-dates/initialize'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import Error from './components/Error'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import CheckIn from './pages/CheckIn'
import Navigation from './components/Navigation'
import styled, { createGlobalStyle } from 'styled-components'
import globals from './utils/globals'
import ProgressBar from './components/ProgressBar'

const GlobalStyle = createGlobalStyle`
    * { font-family: ${globals.fontFamily}; }

    p {
      font-size: ${globals.fontSize};
      width: ${globals.mainBlocWidth};
      text-align: center;
    }

    label {
      font-size: 0.75em;
      font-family: Tahoma, sans-serif;
      text-transform: uppercase;
    }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: ${globals.mainBlocMarginTop};
`

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <GlobalStyle />
        <MainContainer>
          <Header />
          <ProgressBar />
          <Routes>
            <Route exact path={globals.url} element={<Home />} />
            <Route path={globals.url + 'check-in/'} element={<CheckIn />} />
            <Route path={globals.url + 'sign-in/'} element={<SignIn />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Navigation />
        </MainContainer>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
