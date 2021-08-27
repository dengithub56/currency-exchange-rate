import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Calc from '../../components/Calc/Calc'
import style from './Converter.module.css'

export default function Converter() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const [currencyRates, setСurrencyRates] = useState([])

  const base_url = 'https://www.cbr-xml-daily.ru/latest.js'
  useEffect(() => {
    axios
      .get(base_url)
      .then(result => {
        setСurrencyRates(result.data.rates)
        setIsLoaded(true)
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
      <div className={style.wrapper}>
        <Calc currencyRates={currencyRates} />
      </div>
    )
  }
}
