import React, { Component, Fragment } from 'react';

import { Button } from '@material-ui/core';

export default class ListaInmuebles extends Component {
  render() {
    return (
      <Fragment>
        <Button variant="contained" color="primary">
          Color Primario
        </Button>
        <Button variant="contained" color="secondary">
          Color Secundario
        </Button>
      </Fragment>
    );
  }
}
