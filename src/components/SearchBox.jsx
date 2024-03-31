import React from 'react'
import styles from "./SearchBox.module.css"
import { GoSearch } from "react-icons/go";
function SearchBox({search , setSearch ,searchHandaler}) {
  return (
    <div className={styles.search}>
        <input 
            type="text"    
            placeholder='Search Title' 
            value={search}
            onChange={e => setSearch(e.target.value.toLocaleLowerCase())}
            />
        <button onClick={searchHandaler}><GoSearch /></button>
    </div>
  )
}

export default SearchBox