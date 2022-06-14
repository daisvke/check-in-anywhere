import 'react-dates/initialize'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import Error from './components/Error'
import Home from './pages/Home'
import CheckIn from './pages/Check-in'
import Navigation from './components/Navigation'
import styled, { createGlobalStyle } from 'styled-components'
import globals from './utils/globals'

const GlobalStyle = createGlobalStyle`
    * { font-family: ${globals.fontFamily}; }
    p { font-size: ${globals.fontSize}; }
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
          <Routes>
            <Route path="*" element={<Error />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/check-in" element={<CheckIn />} />
          </Routes>
          <Navigation />
        </MainContainer>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
