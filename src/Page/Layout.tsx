import React, { lazy, Suspense  } from 'react'
import { useHistory } from 'react-router-dom'
import Home from './Home'
function Layout() {
    
    return (<>
        <Home />
    </>)
}

export default Layout