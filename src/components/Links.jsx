import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {url: '/search', text:'🔍 All'},
    {url: '/image', text:'📷 Images'},
    {url: '/videos', text:'📺 Videos'}
]

const Links = () => {
  return (
    <div className='flex sm:justify-around items-center mt-4' >
        {links.map(({url, text}) =>(
            <NavLink className="m-2 font-bold flex items-center" to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
                {text}
            </NavLink>
        ))}
      
    </div>
  )
}

export default Links
