import React from 'react'
import style from './Header.module.css'

export default function Header() {
  return (
    <header className={style.Header}>
      <div className='container-1900'>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.item}>
              <a href='/'>Текущие курсы валют</a>
            </li>
            <li className={style.item}>
              <a href='/Converter'>Конвертер валют</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
