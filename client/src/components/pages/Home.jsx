import React from 'react';
import {
  Button,
  makeStyles,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import SubMenu from '../SubMenu';
import Cart from '../header/Cart';

const useStyles = makeStyles({
  numberString: {},
});

function Home() {
  const classes = useStyles();
  const products = useSelector((state) => state.products.items);
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
              <Button variant="contained">Купить</Button>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}

export default Home;
