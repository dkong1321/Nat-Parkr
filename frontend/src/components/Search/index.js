import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import "./Search.css"

const Search = () => {
    const [searchTerm, setSearchTerm] =  useState("")
    const [searchMenu, setSearchMenu] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const images = Object.values(useSelector(state => state.images))
    const dispatch = useDispatch()
    useEffect(()=> {
    if (!searchMenu) return;
      document.addEventListener('click',closeSearch)
      return ()=> document.removeEventListener("click",closeSearch)
    }, [searchMenu, dispatch])

    const openSearch = () => {
        if(searchMenu) return
        setSearchMenu(true);
    }

    const closeSearch = () => {
        setSearchMenu(false)
    }

    const searchFunc = (e) => {
        const searchTerm = e.target.value
        let searchedImages
        if(searchTerm.length > 0) {
            searchedImages = images.filter(image=>{
                return image.title.toLowerCase().includes(searchTerm.toLowerCase())
            }
        )}

        setSearchResults(searchedImages)
    }

    return(
        <div main_search_container>
            {console.log(images)}
            <input onClick={openSearch} onChange={e => searchFunc(e)} className='search_input'></input>
            {searchMenu ? (
                <div className='search_result_container'>
                {searchResults?.length ? (
                    <>
                        <strong>Images</strong>
                        {searchResults.map(searchResult=>{
                            return(
                                <NavLink className = "search_links" to={`/images/${searchResult.id}`}>{searchResult.title}</NavLink>
                            )
                        })}
                    </>
                ):<></>}
                </div>

            ):<></>}
        </div>
    )
}

export default Search
