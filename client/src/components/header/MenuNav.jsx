import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Box,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Select,
} from '@material-ui/core';
import '../../styles.css';

const useStyle = makeStyles({
  navBar: {
    width: 400,
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 60,
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Roboto',
  },
  adminButton: {
    color: 'white',
    fontSize: 23,
    marginTop: -8,
    fontWeight: 'bold',
  },
});

function MenuNav() {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.navBar}>
      <NavLink className="link" to="/home">
        Главная
      </NavLink>

      <Box>
        <Button
          classes={{ root: classes.adminButton }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Админка
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <NavLink className="link_admin" to="/numbers">
              Номера
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink className="link_admin" to="/categories">
              Категории
            </NavLink>
          </MenuItem>
        </Menu>
      </Box>

      <NavLink className="link" to="/about">
        О нас
      </NavLink>
    </Box>
  );
}

export default MenuNav;
