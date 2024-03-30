import React from 'react'

function Layout({children}) {
  return (
    <>
        <header>header</header>
        {children}
        <footer>footer</footer>
    </>
  )
}

export default Layout