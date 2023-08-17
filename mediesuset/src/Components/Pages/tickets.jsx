import React, {useEffect} from 'react'
import { Nav } from '../Partials/nav'
import { Footer } from '../Partials/footer';

export const Tickets = () => {

  useEffect(() => {
    document.title = 'Billetter';
  }, []);

  return (
    <div>
      <Nav />
      <h1>Billetter</h1>
      <Footer />
    </div>
  )
}

