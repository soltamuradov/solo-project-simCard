import React from 'react';
import Logo from './Logo';
import { AppBar, Box, makeStyles } from '@material-ui/core';
import Menu from './MenuNav';
import Cart from './Cart';
import SubMenu from '../SubMenu';
import MenuNav from './MenuNav';

const useStyle = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 50,
    paddingTop: 15,
    backgroundColor: '#1976d2',
  },
});

function Index() {
  const classes = useStyle();

  return (
    <>
      <Box className={classes.header}>
        <Logo />
        <MenuNav />
        <Cart />
      </Box>
    </>
  );
}

export default Index;
