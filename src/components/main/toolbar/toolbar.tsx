import { Avatar, Box, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import MenuComponent from './menu.toolbar'
import { useDispatch, useSelector } from 'react-redux';
// import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
function ToolbarComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const base = import.meta.env.VITE_PATH;
    const VITE_PATH_IMAGE = import.meta.env.VITE_PATH_IMAGE;
    const VITE_PATH_NAME_PROJECT = import.meta.env.VITE_PATH_NAME_PROJECT;
    const VITE_VERSION = import.meta.env.VITE_VERSION;
    const reducer = useSelector((state: any) => state.reducer);
    const empcode = reducer?.emp?.EmpCode;
    const [openMenu, setOpenMenu] = React.useState<null | HTMLElement>(null);
    const open = Boolean(openMenu);
    const [openDrawer, setOpenDrawer] = React.useState(false);
    async function handleOpenMenu(event: React.MouseEvent<HTMLElement>) {
        setOpenMenu(event.currentTarget)
    }
    async function handleCloseMenu() {
        setOpenMenu(null);
    }
    async function handleLogout() {
        if (confirm('คุณต้องการออกจากระบบ ใช่หรือไม่ ? ')) {
            dispatch({ type: 'LOGOUT' });
            navigate(`/${base}/login`);
        }
    }
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpenDrawer(newOpen);
    };
    const handleHome = () => {
        navigate(`/${base}/home`);
    }
    useEffect(() => {

    }, [])
    return (
        <div className='h-[50px] bg-white sticky top-0' style={{ borderBottom: '1px solid #ddd' }}>
            <Stack direction={'row'} justifyContent={'space-between'} px={2} className='h-full' alignContent={'center'}>
                <Stack direction={'row'} alignItems={'center'} spacing={3}>
                    <div>
                        <IconButton onClick={toggleDrawer(true)}><DensityMediumIcon /></IconButton>
                        <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                            <Box width={'175px'}>
                                <Stack p={1} gap={1} className='cursor-pointer'>
                                    <Typography className='text-[14px]'>Module {VITE_VERSION}</Typography>
                                </Stack>
                            </Box>
                        </Drawer>
                    </div>
                </Stack>
                <Stack alignItems={'center'} spacing={1} direction={'row'} className='cursor-pointer select-none' >
                    <Typography className='uppercase  flex justify-center items-center text-[1.5em] text-[#00a0e4] font-semibold italic' onClick={handleHome}>{VITE_PATH_NAME_PROJECT}</Typography>
                </Stack>
                <Stack justifyContent={'center'}>
                    <div onClick={handleOpenMenu} className='flex items-center gap-2 cursor-pointer select-none' >
                        <Typography className=''>{
                            (reducer.login) ? `${reducer.name}.${reducer?.surn.substring(0, 1)}` : '######'
                        }</Typography>
                        <Avatar sx={{ width: 36, height: 36 }} src={`${VITE_PATH_IMAGE}${empcode}.jpg`}>{
                            reducer?.emp?.FullName == undefined ? '#' : reducer.emp.FullName
                        }</Avatar>
                    </div>
                </Stack>
            </Stack>
            <MenuComponent open={open} openMenu={openMenu} closeMenu={handleCloseMenu} handleOpenMenu={handleOpenMenu} logout={handleLogout} />
        </div>
    )
}

export default ToolbarComponent