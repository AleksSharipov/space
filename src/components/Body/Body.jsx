import React from 'react';

import './body.scss';
import arrow from '../../assets/img/arrow.svg';
import info from '../../assets/img/info.svg';

export default function Body({ items }) {

  return (
    <div className="body">
      <div className="body__menu">
        <ul>
          <li>100.00 ₽</li>
          <li><img src={info} alt="увеломление" /><span>1</span>vikavishny</li>
          <li>Выйти</li>
        </ul>
      </div>
      <div className="body__content">
        <h2>Бортовой журнал</h2>
        <p>Бортовой журнал</p>
        <div className="body__content_border"></div>

        {
          items.title.map(item => {
            const name = (item.getElementsByTagName('turbo:topic')[0].textContent).replace(/(<([^>]+)>)/ig, '');
            const content = (item.getElementsByTagName('turbo:content')[0].textContent).replace(/(<([^>]+)>)/ig, ' ');
            return (
              <div key={name} className="body__item">
                <details>
                  <summary>{name} <img src={arrow} alt="arrow" /></summary>
                  <div>
                    {content}
                  </div>

                </details>
                <div className="body__item_border"></div>
              </div>

            )
          })
        }
      </div>

    </div>
  )
}
