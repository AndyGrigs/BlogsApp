import React from "react";
import MySelect from "./select/MySelect.jsx"
import MyInput from "./input/MyInput.jsx"

const PostFilter = ({filter, setFilter}) => {

  
  return (
    <div>
     <MyInput
        placeholder="Search posts..."
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultOption='Sorting by...'
        options={[
          { value: 'title', name: 'by title' },
          { value: 'body', name: 'by body' }
        ]}
      />
    </div>
  )
}

export default PostFilter
