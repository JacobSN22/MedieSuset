import React, {useEffect} from 'react'
import { Nav } from '../Partials/nav'

export const Login = () => {

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div>
        <Nav />
        <h1>Login</h1>
    </div>
  )
}
