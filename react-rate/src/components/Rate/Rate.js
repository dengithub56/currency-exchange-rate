import React from 'react'
import style from './Rate.module.css'

export default function Rate(props) {
  const { currencyValues } = props

  return (
    <>
      <div className={style.list}>
        {currencyValues.map((el, key) => (
          <div className={style.item} key={key}>
            <div className={style.inner}>
              <div className={style.currency}>{el.Value.toFixed(2)}</div>
              <div className={style.cod}>{el.CharCode}</div>
            </div>
            <div>
              <div className={style.name}>{el.Name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
