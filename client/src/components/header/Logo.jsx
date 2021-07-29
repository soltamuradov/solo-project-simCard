import React from 'react';
import SimCardIcon from '@material-ui/icons/SimCard';
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  logoBox: {
    marginLeft: 20,
    display: 'flex',
  },
  logo: {
    fontSize: 30,
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
function Logo() {
  const classes = useStyle();
  return (
    <Box className={classes.logoBox}>
      <SimCardIcon className={classes.logo} />
      <Box className={classes.logoText}>SIM-Card</Box>
    </Box>
  );
}

export default Logo;
