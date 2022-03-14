import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@material-ui/core';
import './navButtons.css';
function NavButtons(link: string) {
    const page = link.replace('/', '');
    return (
        <Link to={link} className="text-decorator-noneNb">
            <Box className='cursor'>
                <Typography variant="h6" className="navTxt">
                    {page}
                </Typography>
            </Box>
        </Link>
    );
}
export default NavButtons;