import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {

    return (
        <>
            <Grid container className="gridFoter">
                <Box className='boxFooter1'>
                    <Typography variant="subtitle2" align="left" gutterBottom className='textos'>© 2022 Copyright:</Typography>
                </Box>
                <Box className='boxFooter1'>
                    <Box>
                        <a target="_blank" className='text-decorator-none-footer' href="https://www.linkedin.com/in/valter-silva-5a44b1171/">
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">Valter Silva</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default Footer;