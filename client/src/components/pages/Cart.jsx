import React from 'react';
import {
  Box,
  Button,
  makeStyles,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

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
  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <TableRow>
        <TableCell>Оператор</TableCell>
        <TableCell>Номер тел.</TableCell>
        <TableCell>цена</TableCell>
        <TableCell>Тип номера</TableCell>
        <TableCell> </TableCell>
      </TableRow>
      {cart.map((item) => {
        return item.productsItems.map((elem) => {
          console.log(elem);
          return (
            <TableRow>
              <TableCell>{elem.product.name}</TableCell>
              <TableCell>{elem.product.number}</TableCell>
              <TableCell>{elem.product.price}</TableCell>
              <TableCell>{elem.product.categoryId.name}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary">
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          );
        });
      })}
    </>
  );
}

export default Cart;
