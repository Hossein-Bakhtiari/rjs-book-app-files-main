import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";

import styles from "./BookCard.module.css"

function BookCard({data , handelLikedList }) {
const {title , image , author , language , pages} = data;    
const [like , setLike] = useState(false);


const likeHndaler = () => {
    handelLikedList(data , like);
    setLike(like => !like);
}

return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <div className={styles.info}>
            <h3>{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages} pages</span>
            </div>
        </div>
        <button onClick={likeHndaler}>
            <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem"/>
        </button>
    </div>
  )
}

export default BookCard