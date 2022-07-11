import { useContext, createContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) =>{
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getResults = async (type) =>{

        setIsLoading(true);
        
        const response = await fetch(`${baseUrl}${type}`, {
            method : 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const data = await response.json();

        setResults(data);
        setIsLoading(false);
        
        // console.log(data);
    }

    return(

        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}} >
          {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);