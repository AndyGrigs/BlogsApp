import React from "react";
import cl from './myModal.module.css'

function MyModal({visible, setVisible, children}) {

  const rootClass = [cl.myModal]
  if(visible){
    rootClass.push(cl.active)
  }
  
  return (
    <div className={rootClass.join(' ')} onClick={()=> setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e)=> e.stopPropagation()}>{children}</div>
    </div>
  )
}

export default MyModal