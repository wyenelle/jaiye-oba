import React from 'react'
import './Home.css'
import { useContext } from 'react'
import stateful from '../contextApi'
import { Link } from 'react-router-dom'

const Home = () => {
const {data} = useContext(stateful)

  return (
    <div className='home'>
     <div className="home-bg">
        <div className="home-info">
          <h1> jaiye-Oba</h1>
          <h3> Frontend Intern At AltSchool Africa</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis, blanditiis molestiae commodi et temporibus! Illo a voluptas maxime consectetur?
          </p>
          <Link className='home-link' to='/github'> view Github </Link>
        </div>
     </div>
    </div>
  )
}

export default Home