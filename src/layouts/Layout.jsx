import React from 'react'
import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p><a href="https://github.com/Hossein-Bakhtiari/rjs-book-app-files-main">GitHub</a> | React.js Project </p>
        </header>
        {children}
        <footer className={styles.footer}>Developed by Hossein</footer>
    </>
  )
}

export default Layout