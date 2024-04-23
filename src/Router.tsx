// import { ThemeContext } from '@emotion/react'
import { useEffect } from 'react'
import { ReduxInterface } from './interface/main.interface';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/notfound';
import Layout from './pages/layout';
import Login from './pages/login';
import Home from './pages/home';
const BASE = import.meta.env.VITE_PATH;
const Routers = () => {
    const redux: ReduxInterface = useSelector((state: any) => state.reducer);
    const login = redux.login;
    useEffect(() => {
    }, [login])
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={`${BASE}/*`} element={<NotFound />} />
                    <Route path={`${BASE}/home`} element={<Home />} />
                </Route>
                <Route path={`${BASE}`} element={<NotFound />} />
                <Route path={`${BASE}/login`} element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers

