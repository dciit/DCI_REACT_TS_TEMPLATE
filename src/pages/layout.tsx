import Login from './login';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Toolbar from '@/components/main/toolbar/toolbar';
import { ReduxInterface } from '@/interface/main.interface';
import { useEffect } from 'react';
function Layout() {
    const redux:ReduxInterface = useSelector((state: any) => state.reducer);
    const login = redux.login;
    return (
        login ? <div className=' h-[95%]'>
            <Toolbar />
            <Outlet />
        </div> : <Login />
    )
}

export default Layout