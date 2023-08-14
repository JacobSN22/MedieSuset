import React, { useEffect } from 'react'
import { Nav } from '../Partials/nav'

export const Eventsprogram = () => {

  useEffect(() => {
    document.title = 'Program';
  }, []);

  return (
    <div>
        <Nav />
        <h1>Program</h1>
    </div>
  )
}
