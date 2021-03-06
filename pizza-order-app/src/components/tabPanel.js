import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  //returns children wrapped in typography component
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  export default TabPanel