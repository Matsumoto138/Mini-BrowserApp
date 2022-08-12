import React,{useState} from 'react'

function Search({value, setValue}) {



  const handleValue= (e) =>{
    setValue(e)
  }

  return (
    <div className='search-comp'>
        <input type="text" placeholder='Search..' onChange={(e)=>handleValue(e.target.value)} value={value} />
        
    </div>
  )
}

export default Search
