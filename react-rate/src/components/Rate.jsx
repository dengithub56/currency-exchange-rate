import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Rate.css';


function Rate() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {

    const apiUrl = "https://www.cbr-xml-daily.ru/latest.js"
    axios.get(apiUrl)
    .then(
      (result) => {
        setItems(result.data.rates);
        console.log(result.data.rates)
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="row rate-list">
        {Object.keys(items).map((keyName, i )=> (
          <div className="col-12 col-sm-6 col-md-4 .col-xl-3 rate-item" key={keyName}>
              <div className="col rate-inner">
                  <div className="rate-item__logo">
                      &#8381;</div>
                  <div className="rate-item__currency">{items[keyName]}</div>
                  <div className="rate-item__сod">{keyName}</div>
              </div>
              <div className="col">
                  <div className="rate-item__name">российский рубль</div>
              </div>
          </div>
        ))}
      </div>
      
    )
  }
}

export default Rate;
