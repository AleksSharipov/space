import React from 'react';

import './sidebar.scss';

import logo from '../../assets/img/logo.svg';
import domens from '../../assets/img/domens.svg';
import help from '../../assets/img/help.svg';
import user from '../../assets/img/user.svg';
import vps from '../../assets/img/vps.svg';

export default function Sidebar() {

  const menuSidebar = [
    {
      value: 'аккаунт',
      img: user,
      types: 'account',
    },
    {
      value: 'VPS',
      img: vps,
      types: 'vps',
    },
    {
      value: 'домены',
      img: domens,
      types: 'домены',
    },
    {
      value: 'Бортовой журнал',
      img: help,
      types: 'Logbook',
    },
  ]

  return (
    <aside className="sidebar">

      <a><img src={logo} alt="logo" /></a>
      <ul className="sidebar__menu">
        {
          menuSidebar.map(item => {
            return <li key={item.types} className={item.types == 'Logbook' ? `sidebar__item active` : `sidebar__item`}><img src={item.img} /> {item.value}</li>
          })
        }
      </ul>
    </aside>
  )
}
