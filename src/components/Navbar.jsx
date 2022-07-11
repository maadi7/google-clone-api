import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';
const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className="flex flex-row justify-between items-center space-x-5 w-screen">
            <Link to="/">
                <p className="text-2xl font-bold py-1 px-2 text-white rounded dark:bg-gray-500 dark:text-gray-900 bg-blue-500">
                    Google 🔍
                </p>
            </Link>
            <button type='button' className='rounded-full text-xl bg-white dark:bg-gray-50 dark:text-gray-900 border px-2 py-1 hover:shadow-lg' onClick={() =>setDarkTheme(!darkTheme) }>
                {darkTheme ? 'Light 🌕': 'Dark 🌙'}
            </button>
        </div>
        <Search/>
    </div>
  )
}

export default Navbar
