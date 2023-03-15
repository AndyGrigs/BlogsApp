import React from "react";
import cl from '../button/myButton.module.css'


function Pagination({totalPages, page, changePage}){
    const pagesArray = Array.from({length: totalPages}, (e, i) => i + 1)
  return(
     <div>
          {pagesArray.map(p => (
      <button
        key={p}
        onClick={()=> changePage(p)}
        className={page === p ? [cl.currentPage, cl.myBtn ].join(' ') : cl.myBtn
        }>{p}</button>))}
        </div>
  )
}

export default Pagination