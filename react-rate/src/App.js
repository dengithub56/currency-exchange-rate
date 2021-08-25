import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Calc from './components/Calc/Calc'
import Rate from './components/Rate/Rate'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

export default function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [date, setDate] = useState(null)
  const [currencyKeys, setCurrencyKeys] = useState([])
  const [currencyValues, setCurrencyValues] = useState([])
  const base_url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  useEffect(() => {
    axios
      .get(base_url)
      .then(result => {
        setIsLoaded(true)
        setCurrencyKeys(Object.keys(result.data.Valute))
        setCurrencyValues(Object.values(result.data.Valute))
        setDate(result.data.Date)
      })
      .catch(error => {
        setIsLoaded(true)
        setError(error)
      })
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Rate currencyValues={currencyValues} date={date} {...props} />
              )}
            />
            <Route exact path='/component/Calc/' component={Calc} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}
