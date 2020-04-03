import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AppNavbar from './componentes/layout/AppNavbar';
import { Grid } from '@material-ui/core';
import ListaInmuebles from './componentes/vistas/ListaInmuebles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import RegistrarUsuarios from './componentes/seguridad/RegistrarUsuarios';
import theme from './theme/theme';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar />
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles} />
              <Route
                path="/auth/registrar"
                exact
                component={RegistrarUsuarios}
              />
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
