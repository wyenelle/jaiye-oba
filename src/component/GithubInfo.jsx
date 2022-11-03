import React, { useEffect,useContext,useState } from 'react'
import './GithubInfo.css'
import { Link, useParams } from 'react-router-dom'
import stateful from '../contextApi'

const GithubInfo = () => {
    const {data,loading} = useContext(stateful)
    console.log(data)
    const [user,setUser] = useState()
    const {id} = useParams()

    const getDta = data.find( obj => obj.id === parseInt(id))

console.log(getDta);
const  {owner: {html_url,avatar_url},visibility,language,topics,default_branch,created_at,full_name} = getDta

  return (
    <div className='githubinfo'>
        
        
                <div className="user-details">
                    <img src={avatar_url} alt='img' />
                    <h1>{full_name} </h1>
                    <h2> {html_url} </h2>
                    <p><span>Repo Visibilty</span> : {visibility} </p>
                    <p><span>Developed Using </span> :  {language} </p>
                    <p><span >Branch</span> :{default_branch} </p>
                    <span><span>Created</span> :  {created_at} </span>

                    
                </div>
    <Link className='git-link' to='/github'> Back</Link>
    </div>
  )
}

export default GithubInfo