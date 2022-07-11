import React,{ useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Links from './Links'

import { useResultContext } from '../context/ResultContextProvider';

const Search = () => {
 const [text, setText] = useState('');
 const {setSearchTerm} = useResultContext();
 const [debouncedValue] = useDebounce(text, 300);

 useEffect(() =>{
  if(debouncedValue) setSearchTerm(debouncedValue)
 }, [debouncedValue])

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input
      value={text}
      type="text"
      className='sm:w-96 h-0.5 w-80 dark-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
      placeholder='Search'
      onChange={(e) => setText(e.target.value)}
      /> 


      <Links/>
    </div>
  )
}

export default Search
