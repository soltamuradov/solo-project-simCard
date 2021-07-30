import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { editCategory } from '../redux/features/categories';

function EditCategoryDialog({ open, setOpen }) {
  const dispatch = useDispatch();

  const editingCategory = useSelector(
    (state) => state.categories.editingCategory
  );

  const [name, setName] = useState(editingCategory.name);

  const handleClose = (id) => {
    dispatch(editCategory(id, { name }));

    setOpen(false);
  };

  const handleEditNameCategory = (e) => {
    setName(e.target.value);
  };

  if (!editingCategory) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Введите новую категорию</DialogTitle>
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
          onClick={() => handleClose(editingCategory._id)}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditCategoryDialog;
