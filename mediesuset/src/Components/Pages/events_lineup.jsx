import React, {useEffect} from 'react'
import { Nav } from '../Partials/nav'
import { Footer } from '../Partials/footer';

export const Eventslineup = () => {

  useEffect(() => {
    document.title = 'LineUp';
  }, []);

  return (
    <div>
        <Nav />
        <h1>Line-Up</h1>
        <Footer />
    </div>
  )
}