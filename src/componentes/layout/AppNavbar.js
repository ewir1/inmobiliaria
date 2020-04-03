import { AppBar, Toolbar } from '@material-ui/core';
import React, { Component } from 'react';

import BarSession from './bar/BarSession';

export default class AppNavbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <BarSession />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
