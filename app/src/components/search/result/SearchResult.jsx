/**
 * Component that movies based on search query.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
import React, { lazy, useState, useTransition, useEffect } from 'react'
import { searchMovie } from '../../../lib/Search.js'

const Search = lazy(() => import('../Search'))
const Side = lazy(() => import('../../home/side/Side'))
const Movie = lazy(() => import('../../home/browse/movie/Movie'))
const Loading = lazy(() => import('../../loading/Loading'))
const Error500 = lazy(() => import('../../error/Error500'))

/**
 * Browse component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function SearchResult () {
    const [isPending, startTransition] = useTransition()
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(null)
    const [serverError, setServerError] = useState(null)
    const [sortMethod, setSortMethod] = useState('relevans')
    const [sortedResult, setSortedResult] = useState()
    const [unsortedResult, setUnortedResult] = useState()

    const urlSearchParams = new URLSearchParams(window.location.search)
    const query = Object.fromEntries(urlSearchParams.entries()).query

     /**
     * Perform side effects in function component.
     */
    useEffect(() => {
        let mounted = true

        const loadData = async () => {
            const response = await searchMovie(query)
            if (mounted) {
                if (response.status === 200) {
                    setLoading(false)
                    setResult(response.data.results)
                    setUnortedResult(response.data.results)
                } else {
                    setServerError(true)
                }
            }
        }
        loadData()
        return () => {
            mounted = false
        }
    }, [])
   

    useEffect(() => {
        if (result) {
            let sortedResult = [...result]
            if (sortMethod === 'imdb') {
                sortedResult.sort((a, b) => b.vote_average - a.vote_average)
            } else {
                sortedResult = unsortedResult
            }
            setResult(sortedResult)
        }
    }, [sortMethod])
    
    useEffect(() => {
        if (result) {
            let sortedResult = [...result]
            if (sortMethod === 'imdb') {
                sortedResult.sort((a, b) => b.vote_average - a.vote_average)
            }
            setSortedResult(sortedResult)
        }
    }, [sortMethod, result])
      
   
  
    if (serverError) {
        return <Error500 />
    }

    return (
        <div className="search-container">
            <Search/>
            <Side/>
            {loading && <Loading/>}
            {result && (
            <div className="search-result">
                <h1 className="title">Results for "{query}"</h1>
                <div className="sort-container">
                    <div className="sort-label">Sort by:</div>
                    <select onChange={e => setSortMethod(e.target.value)}>
                        <option value="relevans">relevans</option>
                        <option value="imdb">IMDB</option>
                    </select>
                </div>
                {result.length > 1 ? (                
                <div className="search-movies">
                    {result.map(movie => (
                    <Movie 
                        title={movie.original_title} 
                        posterPath={movie.poster_path}
                        id={movie.id} 
                        className='search-item'
                        key={movie.id}
                        />
                    ))}
                </div>
                ) : (
                    <p>No matching movies.</p>
                )}
            </div>
            )}                    
        </div>
    ) 
}