import React from 'react'
import './Pagination.css'


const Pagination = ({
    totalPost,postPerPage,change_page
}) => {
    const page_num = [];
    for (let i = 1; i < (totalPost / postPerPage); i++) {
        page_num.push(i);
      }
  return (
    <div className='pagination'>


      {page_num.map((number) => (
        <li className='page-link' onClick={() => change_page(number)}>
          <a href="#" >
            {number}
          </a>
        </li>
      ))}
    </div>
  )
}

export default Pagination