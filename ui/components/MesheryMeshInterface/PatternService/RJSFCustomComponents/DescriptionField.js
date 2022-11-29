import React from 'react';


import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  typography : {
    marginTop : "1rem",
  },
});

const DescriptionField = ({ description }) => {
  if (description) {
    const classes = useStyles();

    return (
      <Typography variant="caption" className={classes.typography}>
        {description}
      </Typography>
    );
  }

  return null;
};

export default DescriptionField;
