import React, {useEffect} from 'react'
import { Nav } from '../Partials/nav'
import { Footer } from '../Partials/footer';

export const Login = () => {

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div>
        <Nav />
        <h1>Login</h1>
        <Footer />
    </div>
  )
}
