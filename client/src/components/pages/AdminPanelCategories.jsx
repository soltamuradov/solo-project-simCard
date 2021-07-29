import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TableCell,
  TableRow,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import AddCategory from '../AddCategory';
import { editCategory } from '../../redux/features/categories';

const useStyles = makeStyles({
  subMenu: {
    backgroundColor: 'gray',
  },
});

function AdminPanelCategories() {
  const categories = useSelector((state) => state.categories.items);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setNameCategory] = useState('');
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (id) => {
    dispatch(editCategory(id, { name }));
    console.log(id);
    setOpen(false);
  };

  const handleEditNameCategory = (e) => {
    setNameCategory(e.target.value);
  };

  return (
    <>
      <TableRow className={classes.subMenu}>
        <TableCell> </TableCell>
        <TableCell>Тип категории</TableCell>
        <TableCell>ИД категории</TableCell>
        <TableCell> </TableCell>
        <TableCell> </TableCell>
      </TableRow>
      <AddCategory />
      {categories.map((category) => {
        return (
          <TableRow>
            <TableCell> </TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category._id}</TableCell>
            <TableCell>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Изменить
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  Введите новую категорию
                </DialogTitle>
                <DialogContent>
                  <TextField
                    value={name}
                    label="Ввести категорию"
                    placeholder="Ввести категорию"
                    type="text"
                    onChange={handleEditNameCategory}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleClose(category._id)}
                    color="primary"
                  >
                    Save
                  </Button>
                </DialogActions>
              </Dialog>
            </TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        );
      })}
    </>
  );
}

export default AdminPanelCategories;
