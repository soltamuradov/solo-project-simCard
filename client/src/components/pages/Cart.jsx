import React from 'react';
import {
  Box,
  Button,
  makeStyles,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { delProdFromCart } from '../../redux/features/cart';

const useStyle = makeStyles({
  cartBox: {
    marginRight: 20,
  },
  cart: {
    fontSize: 30,
  },
});
function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleDelProdFromCart = (cartId, productId) => {
    dispatch(delProdFromCart(cartId, productId));
  };

  return (
    <>
      <TableRow>
        <TableCell>Оператор</TableCell>
        <TableCell>Номер тел.</TableCell>
        <TableCell>Цена</TableCell>
        <TableCell>Тип номера</TableCell>
        <TableCell> </TableCell>
      </TableRow>
      {cart.map((item) => {
        return item.productsItems.map((elem) => {
          return (
            <TableRow>
              <TableCell>{elem.product.name}</TableCell>
              <TableCell>{elem.product.number}</TableCell>
              <TableCell>{elem.product.price}</TableCell>
              <TableCell>{elem.product.categoryId.name}</TableCell>
              <TableCell>
                <Button
                  onClick={() =>
                    handleDelProdFromCart(item._id, elem.product._id)
                  }
                  variant="contained"
                  color="secondary"
                >
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

//   {cart.map((item) => {
//     return item.productsItems.map((elem) => {
//       console.log(elem);
//       return (
//         <TableRow>
//           <TableCell>{elem.product.name}</TableCell>
//           <TableCell>{elem.product.number}</TableCell>
//           <TableCell>{elem.product.price}</TableCell>
//           <TableCell>{elem.product.categoryId.name}</TableCell>
//           <TableCell>
//             <Button variant="contained" color="secondary">
//               Удалить
//             </Button>
//           </TableCell>
//         </TableRow>
//       );
//     });
//   })}
// </>
