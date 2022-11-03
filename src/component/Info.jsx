import React from 'react'
import { Link } from 'react-router-dom'
import './Info.css'

const Info = ({item}) => {
    const {name,id} = item
  return (
    <header className='info'>
         
          <h1 >
            {name}
          </h1>
          
          <Link to={`/github/${id}`} className='info-link' > See More</Link>
       
    </header>
  )
}

export default Info