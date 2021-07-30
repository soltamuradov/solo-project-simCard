import React, { useState } from 'react';
import {
  Button,
  makeStyles,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import AddCategory from '../AddCategory';
import { setEditingCategory } from '../../redux/features/categories';
import EditCategoryDialog from '../EditCategoryDialog';

const useStyles = makeStyles({
  subMenu: {
    backgroundColor: 'gray',
  },
});

function AdminPanelCategories() {
  const categories = useSelector((state) => state.categories.items);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = (category) => {
    dispatch(setEditingCategory(category));

    setOpen(true);
  };

  return (
    <>
      <TableRow className={classes.subMenu}>
        <TableCell> </TableCell>
        <TableCell>Тип категории</TableCell>
        <TableCell> </TableCell>
        <TableCell> </TableCell>
      </TableRow>
      <AddCategory />
      {categories.map((category) => {
        return (
          <TableRow>
            <TableCell> </TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleClickOpen(category)}
              >
                Изменить
              </Button>
            </TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        );
      })}
      <EditCategoryDialog setOpen={setOpen} open={open} />
    </>
  );
}

export default AdminPanelCategories;
