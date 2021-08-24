import React, { useEffect, useState } from 'react';
import './Rate.css';


export default function Rate() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rates, setRates] = useState([]);
  const [daten, setDate] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRates(result.Valute);
          setDate(result.Date);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  const codeValute = require('./codeValute.json');
  const allRates = Object.values(rates)
  const arr = []

  const code = allRates.map((i)=>{
     {codeValute.forEach(k => {
            if(i.CharCode === k.name){
              arr.push(k.symbol)
            }
      })}
      document.querySelectorAll('.rate-item__logo').forEach((item, itemKey)=>item.innerHTML = arr[itemKey])
  })


 
  const listItems = allRates.map((item, key)=>
    <div className="rate-item" key={key}>
        <div className="rate-inner">
            <div className="rate-item__logo"></div>
            <div className="rate-item__currency">{item.Value}</div>
            <div className="rate-item__сod">{item.CharCode}</div>
        </div>
        <div>
            <div className="rate-item__name">{item.Name}</div>
        </div>
    </div>
  )
  function dateFromApi(el){
      const dateApi = new Date(el);
      const yearApi = dateApi.getFullYear()
      const monthApi = dateApi.getMonth()
      const dayApi = dateApi.getDate()
      return `${yearApi}-${monthApi}-${dayApi}`
  }

  
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div class="container-1900">
        <h3>курс валют на: {dateFromApi(daten)}</h3>
          <div className="rate-list">
              {listItems}
          </div>
      </div>
    );
  }
}



