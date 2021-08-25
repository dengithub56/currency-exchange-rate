import React from 'react'
import './Rate.css'
const arr = []
const codeValute = require('./codeValute.json')

export default function Rate(props) {
  const { currencyValues, date } = props

  const currencyItem = currencyValues.map((el, key) => (
    <div className='rate-item' key={key}>
      <div className='rate-inner'>
        <div
          className='rate-item__logo'
          onload={addCurrencyItemLogoInArray()}
        ></div>
        <div className='rate-item__currency'>{el.Value.toFixed(2)}</div>
        <div className='rate-item__сod'>{el.CharCode}</div>
      </div>
      <div>
        <div className='rate-item__name'>{el.Name}</div>
      </div>
    </div>
  ))

  function addCurrencyItemLogoInArray() {
    currencyValues.map(el => {
      codeValute.forEach(k => {
        if (el.CharCode === k.name) {
          arr.push(k.symbol)
        }
      })
    })
    document
      .querySelectorAll('.rate-item__logo')
      .forEach((item, itemKey) => (item.innerHTML = arr[itemKey]))
  }

  function dateFromApi(el) {
    const dateApi = new Date(el)
    const yearApi = dateApi.getFullYear()
    const monthApi = dateApi.getMonth()
    const dayApi = dateApi.getDate()
    return `${yearApi}.${monthApi}.${dayApi}`
  }
  return (
    <>
      <div class='container-1900'>
        <h3>курс валют на: {dateFromApi(date)}</h3>
        <p>Базовая валюта: Российский рубль (RUB)</p>
        <div className='rate-list'>{currencyItem}</div>
      </div>
    </>
  )
}
