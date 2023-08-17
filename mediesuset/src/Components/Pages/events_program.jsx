import React, { useEffect } from 'react'
import { Nav } from '../Partials/nav'
import { Footer } from '../Partials/footer';

export const Eventsprogram = () => {

  useEffect(() => {
    document.title = 'Program';
  }, []);

  return (
    <div>
        <Nav />
        <h1>Program</h1>
        <Footer />
    </div>
  )
}
