import React, { lazy, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Register } from './LoginAndRegister'
import { rootReducerType} from '../Store'
const Login = lazy(() => import('./LoginAndRegister/Login'))
const Layout = lazy(() => import('./Layout')) 

function isLogin() {
    const user = useSelector((state: rootReducerType) => state.user)
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {
                user.token ? 
                    <Layout />:
                    <Login />
            }
        </React.Suspense>
    )
}

function Index() {
    useEffect(() => {
        console.log('effect')
    }, [])
    console.log('index')
    return (<>
        <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/" component={isLogin}/>
        </Switch>
    </>)
}

export default Index