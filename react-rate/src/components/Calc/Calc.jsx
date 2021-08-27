import React, { useState, useEffect } from 'react'
import style from './Calc.module.css'

export default function Calc(props) {
  const { currencyRates } = props

  const [result, setResult] = useState()
  const [currencyVal, setCurrencyVal] = useState(
    Object.values(currencyRates)[0]
  )
  const [valueSelect, setValueSelect] = useState(Object.keys(currencyRates)[0])
  const [inputValue, setInputValue] = useState(1)

  useEffect(() => {
    setResult((currencyVal * inputValue).toFixed(2))
  }, [currencyVal, inputValue])

  function onChangeSelect(e) {
    setValueSelect(e.target.value)
    setCurrencyVal(currencyRates[e.target.value])
  }

  function onChangeInput(e) {
    setInputValue(e.target.value)
  }

  return (
    <>
      <div className={style.header}>
        результат обмена {inputValue} RUB = {result} {valueSelect}
      </div>
      <div className={style.body}>
        <input
          type='number'
          value={inputValue}
          onChange={onChangeInput}
          autocomplete='off'
        />
        <select onChange={onChangeSelect}>
          {Object.keys(currencyRates).map((el, key) => (
            <option key={key}>{el}</option>
          ))}
        </select>
      </div>
    </>
  )
}
