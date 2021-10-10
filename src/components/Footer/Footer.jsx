import React from 'react';

import './footer.scss';

export default function Footer() {
  return (
    <section className="footer">
      <ul>
        <li>© 2001– 2018 ООО <span>«СпейсВэб»</span></li>
        <li>Все права защищены.</li>
        <li>Лицензия №163230</li>
      </ul>

      <ul>
        <li><span>+7 (812) 334-12-22</span>  (в Санкт-Петербурге)</li>
        <li><span>+7 (495) 663-16-12</span>  (в Москве)</li>
        <li><span> (800) 100-16-15</span> (бесплатно по России)</li>
      </ul>
    </section>
  )
}
