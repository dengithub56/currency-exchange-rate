import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Rate from '../../components/Rate/Rate'
import Converter from '../Converter/Converter'
import './App.css'

export default function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [date, setDate] = useState(null)
  const [currencyValues, setCurrencyValues] = useState([])

  const base_url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  useEffect(() => {
    axios
      .get(base_url)
      .then(result => {
        setIsLoaded(true)
        setCurrencyValues(Object.values(result.data.Valute))
        setDate(result.data.Date)
      })
      .catch(error => {
        setIsLoaded(true)
        setError(error)
      })
  }, [])

  function dateFromApi(el) {
    const dateApi = new Date(el)
    const yearApi = dateApi.getFullYear()
    const monthApi = dateApi.getMonth()
    const dayApi = dateApi.getDate()
    return `${yearApi}.${monthApi}.${dayApi}`
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div className='App'>
        <Router>
          <Header />
          <section>
            <div className='container-1900'>
              <h3>курс валют на: {dateFromApi(date)}</h3>
              <p>Базовая валюта: Российский рубль (RUB)</p>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => <Rate currencyValues={currencyValues} />}
                />
                <Route exact path='/Converter' component={Converter} />
              </Switch>
            </div>
          </section>
        </Router>
        <Footer />
      </div>
    )
  }
}
