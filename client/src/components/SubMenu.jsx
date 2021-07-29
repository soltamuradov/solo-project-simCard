import React, { useEffect } from 'react';
import {
  Button,
  makeStyles,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import categories, { allCategories } from '../redux/features/categories';
import products, { productsByCategory } from '../redux/features/products';

const useStyles = makeStyles({
  subMenu: {
    backgroundColor: 'gray',
  },
});

function SubMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (id) => {
    dispatch(productsByCategory(id));

    handleClose();
  };

  return (
    <TableRow className={classes.subMenu}>
      <TableCell> </TableCell>
      <TableCell>Оператор</TableCell>
      <TableCell>Номер тел.</TableCell>
      <TableCell>Цена</TableCell>
      <TableCell>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Тип номера
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {categories.map((category) => {
            return (
              <MenuItem onClick={() => handleSelect(category._id)}>
                {category.name}
              </MenuItem>
            );
          })}
        </Menu>
      </TableCell>
      <TableCell> </TableCell>
    </TableRow>
  );
}

export default SubMenu;
