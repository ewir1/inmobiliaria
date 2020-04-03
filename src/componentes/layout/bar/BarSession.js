import { Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  fullWidth: {
    width: '100%'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  grow: {
    flexGrow: 1
  }
});

class BarSession extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Toolbar className={classes.fullWidth}>
        <IconButton color="inherit">
          <i className="material-icons">menu</i>
        </IconButton>
        <Typography variant="h6">EWIR HOME</Typography>
        <div className={classes.grow}></div>
        <div className={classes.sectionDesktop}>
          <Button color="inherit">Login</Button>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton color="inherit">
            <i className="material-icons">more_vert</i>
          </IconButton>
        </div>
      </Toolbar>
    );
  }
}
export default withStyles(styles)(BarSession);
