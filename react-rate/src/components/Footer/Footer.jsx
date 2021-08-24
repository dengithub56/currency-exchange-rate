import React from 'react'
import style from './Footer.module.css'

export default function Footer(){
  return(
    <footer className={style.footer}>
        <div className="container-1900">
            <div className={style.list}>
                <div className={style.item}>2021</div>
                <div className={style.item}>Ковертер валют</div>
            </div>
        </div>
    </footer>
  )
}