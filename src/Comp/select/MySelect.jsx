import React from "react"
import { nanoid } from "nanoid"


const MySelect = ({options, defaultOption, onChange, value }) => {

  return (

   <select
     value={value}
     onChange={e => onChange(e.target.value)}
     >
     <option disabled>{defaultOption}</option>
     {options.map(option => (
     <option key={nanoid()} value={option.value}>{option.name}</option>
     ))}
   </select>

  )
}

export default MySelect