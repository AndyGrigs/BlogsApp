import React from "react"
import cl from "./myButton.module.css"

const MyButton = ({children, ...props}) => {
  return (
    <button className={cl.myBtn} {...props}>
      {children}
    </button>
  )
}

export default MyButton
