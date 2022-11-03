import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom' 


const Error = () => {
  return (
    <div>
      <h1>Error 404 : Page Not Found</h1>
      <Link className='git-link' to='/'> Home</Link>
    </div>
  )
}

export default Error