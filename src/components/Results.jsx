import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Loading from './Loading'

import { useResultContext } from '../context/ResultContextProvider'

const Results = () => {

  const location = useLocation();
  const {results, isLoading, getResults, searchTerm } = useResultContext();

  useEffect(() =>{
    if(searchTerm){
      if(location.pathname === '/videos'){
        getResults(`/search/q=${searchTerm} video`)
      }else{
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
    
  },[searchTerm, location.pathname])

  if(isLoading) return <Loading/>

  switch (location.pathname) {
    case '/search':
      return(
        <div className="flex flex-col flex-wrap justify-start items-start md:px-10 px-4 space-y-12">
          {results?.results?.map(({link, title}, index) =>(
            <a key={index} href={link} target="_blank" rel='noreferrer' >
              <p className="text-sm">
                {link.length > 30 ? link.substring(0, 30) : link }

              </p>
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                {title}
              </p>
            </a>
          ))}
        </div>
      )
      
    case '/image':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(({image, link: {href, title}}, index) =>(
            <a className='sm:p-3 p-5' key={index} target="_blank" rel="noreferrer" href={href} >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">
                {title}
              </p>
            </a>
          ))}
        </div>
      );
      case '/videos':
        return (
          <div className="flex items-center justify-center flex-wrap ">
            {results?.results?.map((video, index) => (
              <div key={index} className="p-2">
                <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
              </div>
            ))}
          </div>
        );
  
    default:
      return 'ERROR';
  }
  
}

export default Results
