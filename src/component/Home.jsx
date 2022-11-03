import React from 'react'
import './Home.css'
import { useContext } from 'react'
import stateful from '../contextApi'

const Home = () => {
const {data} = useContext(stateful)

  return (
    <div className='home'>
     {
      data &&  <img src={data[0].owner.avatar_url} />
     }
    { data && <p>
     My name is {data[0].owner.login}, Frontend Intern at AltSchool Africa. View my Github account to know more about me. Thanks
     </p>
}


    </div>
  )
}

export default Home