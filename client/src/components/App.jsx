import React, { useEffect } from 'react';
import Header from './header/Index';
import { Container, Table, TableContainer } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../redux/features/products';
import Routes from './Routes';
import { allCategories } from '../redux/features/categories';
import { loadCart } from '../redux/features/cart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProducts()), [dispatch]);

  useEffect(() => dispatch(allCategories()), [dispatch]);

  useEffect(() => dispatch(loadCart()), [dispatch]);

  return (
    <>
      <Container className="container" maxWidth="xl">
        <Header />
        <TableContainer>
          <Table>
            <Routes />
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default App;
