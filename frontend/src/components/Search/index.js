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

    const highlightSearch = (searchResult) => {
        const indexStart = searchResult.title.toLowerCase().indexOf(searchTerm.toLowerCase())
        const stringStart = searchResult.title.slice(0,indexStart)
        const stringMid = searchResult.title.slice(indexStart,indexStart+searchTerm.length)
        const stringEnd = searchResult.title.slice(indexStart+searchTerm.length)

        return(
            <NavLink className = "search_links" to={`/images/${searchResult.id}`}><span className='not_search_term'>{stringStart}</span><span>{stringMid}</span><span className='not_search_term'>{stringEnd}</span></NavLink>
        )
    }

    const searchFunc = (e) => {
        const searchTerm = e.target.value
        setSearchTerm(e.target.value)
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
            <div className='search_bar_container' onClick={openSearch}>
                <input id="search" onClick={openSearch} onChange={e => searchFunc(e)} className='search_input' placeholder='Search Image By Name'></input>
                <label name="search" onClick={openSearch} className='search_icon'><i className="fa-solid fa-magnifying-glass"></i></label>
            </div>
            {searchMenu && searchTerm.length ? (
                <div className='search_result_container'>
                {searchResults?.length ? (
                    <>
                        <strong>Images</strong>
                        {searchResults.map(searchResult=>{
                            return(
                                highlightSearch(searchResult)
                                )
                        })}
                    </>
                ):<></>}
                </div>

            ): <></>}
        </div>
    )
}

export default Search
