import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    return (
        <>
            <Toolbar className='tooHeader'>
                <Box display="flex">
                    <a href="https://github.com/valterchess" target="_blank">
                        <GitHubIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/in/valter-silva-5a44b1171/" target="_blank">
                        <LinkedInIcon className='redes'/>
                    </a>
                </Box>
                <Box display="flex" justifyContent="end">
                    <a href='#home' className="text-decorator-noneNb">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className="navTxt">
                                Home
                            </Typography>
                        </Box>
                    </a>
                    <a href='#sobre' className="text-decorator-noneNb">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className="navTxt">Sobre</Typography>
                        </Box>
                    </a>
                    <Link to='/conhecimentos' className="text-decorator-noneNb">
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color="inherit" className="navTxt">Conhecimentos</Typography>
                        </Box>
                    </Link>
                    <Link to='/projetos' className="text-decorator-noneNb">
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color="inherit" className="navTxt">Projetos</Typography>
                        </Box>
                    </Link>
                </Box>
            </Toolbar>
        </>
    )
}
export default Navbar;