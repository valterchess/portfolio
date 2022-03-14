import * as React from 'react';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import NavUser from './user/NavUser';
import NavMenu from './menu/NavMenu';
import './nav.css'
import { Link } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const openNav = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }

  const closeNav = () => {
    setAnchorElNav(null);
  }

  const  openUser = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const closeUser = () =>{
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className='nav'>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <NavMenu ancor={anchorElNav} open={openNav} close={closeNav}/>
          <NavUser ancor={anchorElUser} open={openUser} close={closeUser}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;