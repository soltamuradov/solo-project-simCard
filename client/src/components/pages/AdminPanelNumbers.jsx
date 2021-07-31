import React from 'react';
import {
  Button,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import SubMenu from '../SubMenu';
import { deleteProducts } from '../../redux/features/products';
import AddProducts from '../AddProducts';

function AdminPanelNumbers() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProducts(id));
  };
  return (
    <>
      <SubMenu />
      <AddProducts />
      <>
        {products.map((product) => {
          return (
            <TableRow>
              <TableCell> </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.number}</TableCell>
              <TableCell>{`${product.price} руб.`}</TableCell>
              <TableCell>{product.categoryId.name}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDeleteProduct(product._id)}
                  variant="contained"
                  color="secondary"
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </>
    </>
  );
}

export default AdminPanelNumbers;
