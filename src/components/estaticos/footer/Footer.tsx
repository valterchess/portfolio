import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    return (
        <>
            <Grid container direction="row" className="gridFoter" item xs={12}>
                <Box className='boxFooter1'>
                    <Box>
                        <Typography variant="subtitle2" align="left" gutterBottom className='textos'>© 2021 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" className='text-decorator-none-footer' href="https://urbanize.vercel.app/home">
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">Projeto urbanize</Typography>
                        </a>
                    </Box>
                </Box>
                    <Box className='boxFooter2'>
                        <a href="https://github.com/valterchess" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://www.instagram.com/valter_silva_dev/" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/valter-silva-5a44b1171/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
            </Grid>
        </>
    )
}

export default Footer;