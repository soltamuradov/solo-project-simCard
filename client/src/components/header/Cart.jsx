import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyle = makeStyles({
  cartBox: {
    marginRight: 20,
  },
  cart: {
    fontSize: 30,
  },
});
function Cart() {
  const classes = useStyle();
  return <Box className={classes.cartBox}></Box>;
}

export default Cart;
