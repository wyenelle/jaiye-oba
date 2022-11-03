import React from 'react'
import stateful from '../contextApi'
import {useState, useContext } from 'react'
import Info from './Info'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import ErrorBoundary from './ErrorBoundary'
import './Github.css'
const Github = () => {

    const {data,loading } = useContext(stateful)
    const [thisPage, setThisPage] = useState(1)
    const postPerPage = 3
    
    const change_page = (pageNumber) => setThisPage(pageNumber)
    const lastPost = thisPage * postPerPage
    const firstPage = lastPost - postPerPage


    const current_post =  data.slice(firstPage,lastPost)
    console.log(current_post);
  return (
    <div className='gitbub'>
        <main>
{loading && !data ? 'loading.....' : (
    current_post.map( (item,idx) =><ErrorBoundary><Info loading={loading} idx={idx} item={item} data={data} key={item.id} /></ErrorBoundary> )
)}
<Link className='git-link' to='/'>Back</Link> <br/>
    <Pagination 
    postPerPage={postPerPage}
    totalPost={data.length}
    change_page={change_page}
    />
    </main>
    </div>
  )
}

export default Github