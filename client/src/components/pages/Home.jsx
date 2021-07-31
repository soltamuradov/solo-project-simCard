import React, { useState } from 'react';
import { Button, makeStyles, TableCell, TableRow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import SubMenu from '../SubMenu';
import { productBuy } from '../../redux/features/products';

const useStyles = makeStyles({
  numberString: {},
});

function Home() {
  const classes = useStyles();
  const products = useSelector((state) => state.products.items);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleBuy = (productId) => {
    const cartId = cart.map((item) => {
      return item._id;
    });
    dispatch(productBuy(productId, cartId));
  };
  return (
    <>
      <SubMenu />
      {products.map((product) => {
        return (
          <TableRow classes={{ root: classes.numberString }}>
            <TableCell> </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.number}</TableCell>
            <TableCell>{`${product.price} руб.`}</TableCell>
            <TableCell>{product.categoryId.name}</TableCell>
            <TableCell>
              <Button
                onClick={() => handleBuy(product._id)}
                variant="contained"
              >
                Купить
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}

export default Home;
