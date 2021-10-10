import React, { useEffect } from 'react';
import Body from '../Body/Body';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../../redux/actions/items';

import './home.scss';

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchContent())

  }, []);

  const data = useSelector(({ items }) => items)

  return (
    <section className="home">
      <Sidebar />
      <Body items={data} />
    </section>
  )
}
