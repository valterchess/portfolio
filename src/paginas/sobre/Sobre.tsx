import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Sobre.css';

function Sobre(){
    return (
        <>
        <section id='sobre'>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#1e272e" }}>
            <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                    <Box paddingRight={19} paddingTop={10} paddingBottom={3} className='teste'>
                        <Box>
                            <a href="https://www.linkedin.com/in/valter-silva-5a44b1171/" target="_blank">
                                <img src="https://i.imgur.com/A71XElz.png" alt="imagem de perfil" width='400px' height='400px' style={{ borderRadius: '35%' }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7} xl={7} >
                    <Box paddingRight={3} paddingTop={10}>
                        <Typography className='font' variant="h4"  component="h4" align="center" style={{ color: "#006266", fontWeight: "bold" }}>Sobre mim</Typography>
                        <p className='font' style={{ color: "white", fontWeight: "bold" }}>
                            Entrei na área de desenvolvimento 
                            por acreditar que através da tecnologia é possível desenvolver
                             e conectar as pessoas e o mundo de forma inteligente, dinâmica
                             e criativa. 
                             E também pela oportunidade de crescimento que a tecnologia nos proporciona.
                             Sigo diariamente evoluindo e buscando aprender novas ferramentas para a resolução de problemas
                             e ampliar meus horizontes e conquistar meu espaço no desenvolvimento.
                            <br/>
                            <br/>                                                                                                                                                                                                                                                                                                                                                                                                            
                            Atualmente estou cursando Análise e Desenvolvimento de Sistemas,
                            mas pretendo ir além e me tornar especialista e referência no desenvolvimento web back-end.
                            E também poder colaborar para o crescimento da comunidade como um todo e na evolução do mercado tecnológico no Brasil.
                        </p>
                        <a href='https://drive.google.com/file/d/1fm4pLr6rFeSXJCMyYMjHWrTqeCbxixBX/view' className="text-decorator-none" target="_blank">
                        <Button className='botCv' style={{ fontWeight: "bold" }}>Download CV</Button>
                        </a>
                    </Box>
                </Grid>
            </Grid>
        </section>
        </>
    );
}
export default Sobre;