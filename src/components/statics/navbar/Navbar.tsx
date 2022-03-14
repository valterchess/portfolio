import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { AppBar, Toolbar, Typography, Box, Container, IconButton, Avatar, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 0 }}>
                            <a href="https://github.com/valterchess" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/valter-silva-5a44b1171/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <Link to='/home' className="text-decorator-noneNb">    
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className="navTxt">
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <a href='#sobre' className="text-decorator-noneNb">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className="navTxt">Sobre</Typography>
                                </Box>
                            </a>
                            <Link to='/cards' className="text-decorator-noneNb">
                                <Box mx={1} className='cursor'>
                                    <Typography variant='h6' color="inherit" className="navTxt">Conhecimentos</Typography>
                                </Box>
                            </Link>
                            <Link to='/projetos' className="text-decorator-noneNb">
                                <Box mx={1} className='cursor'>
                                    <Typography variant='h6' color="inherit" className="navTxt">Projetos</Typography>
                                </Box>
                            </Link>
                            <a href='https://templotech.blogspot.com/' className="text-decorator-noneNb" target="_blank">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className="navTxt">
                                        Blog
                                    </Typography>
                                </Box>
                            </a>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Navbar;