import { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
  TextField,
} from '@material-ui/core';
import { addProduct, productsByCategory } from '../redux/features/products';
import { useDispatch, useSelector } from 'react-redux';

function AddProducts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategory] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);

  const handleAddName = (e) => {
    setName(e.target.value);
  };
  const handleAddNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleAddPrice = (e) => {
    setPrice(e.target.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAddCategory = (id) => {
    setCategory(id);

    handleClose();
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleAddButton = () => {
    dispatch(addProduct({ name, number, price, categoryId }));
    setName('');
    setNumber('');
    setPrice('');
    setCategory('');
  };

  return (
    <TableRow>
      <TableCell> </TableCell>
      <TableCell>
        <TextField
          type="text"
          value={name}
          placeholder="Ввести оператора"
          label="Ввести оператора"
          onChange={handleAddName}
        />
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          value={number}
          placeholder="Ввести номер"
          label="Ввести номер"
          onChange={handleAddNumber}
        />
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          value={price}
          placeholder="Ввести цену"
          label="Ввести цену"
          onChange={handleAddPrice}
        />
      </TableCell>
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
              <MenuItem onClick={() => handleAddCategory(category._id)}>
                {category.name}
              </MenuItem>
            );
          })}
        </Menu>
      </TableCell>
      <TableCell>
        <Button onClick={handleAddButton} variant="contained">
          Добавить
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default AddProducts;
