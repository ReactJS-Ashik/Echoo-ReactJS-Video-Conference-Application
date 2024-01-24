import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { PropTypes } from 'prop-types';

export default function MySnackBar(props) {
  const action = (
    <React.Fragment>
      {
        props.actionText &&
          <Button color="secondary" size="small" onClick={props.handleClose}>
            {props.actionText}
          </Button>
      }
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={props.handleClose}
      >
        {props.actionIcon}
      </IconButton>
    </React.Fragment>
  );

  return (
      <Snackbar
        anchorOrigin={{vertical: props.vertical, horizontal: props.horizontal}}
        severity="success"
        open={props.open}
        autoHideDuration={1000}
        onClose={props.handleClose}
        message={props.message}
        action={action}
      />
  );
}


MySnackBar.propTypes= {
  open: PropTypes.bool.isRequired,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  message: PropTypes.string.isRequired,
  actionText: PropTypes.string,
  actionIcon: PropTypes.element,
  handleClose: PropTypes.func,
}