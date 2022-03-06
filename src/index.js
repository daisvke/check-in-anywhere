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

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path='*' element={<Error />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/check-in" element={<CheckIn />} />
        </Routes>
        <Navigation />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
