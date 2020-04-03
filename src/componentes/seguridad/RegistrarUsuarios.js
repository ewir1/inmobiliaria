import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import React, { useState } from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const style = {
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: 8,
    backgroundColor: '#e53935'
  },
  form: {
    width: '100%',
    marginTop: 10
  },
  submit: {
    marginTop: 15,
    marginBottom: 20
  }
};

const RegistrarUsuarios = () => {
  //   const initialState = {
  //     usuario: {
  //       nombre: 'ss',
  //       apellido: '',
  //       email: '',
  //       password: ''
  //     }
  //   };
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: ''
  });

  const onChangeUsuario = e => {
    // let usuario = Object.assign({}, this.state.usuario);
    // usuario[e.target.name] = e.target.value;
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const RegistrarUsuario = e => {
    e.preventDefault();
    console.log(usuario);
  };

  return (
    <Container maxWidth="lg">
      <div style={style.paper}>
        <Avatar style={style.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registre su cuenta
        </Typography>
        <form style={style.form}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                type="text"
                name="nombre"
                value={usuario.nombre}
                onChange={onChangeUsuario}
                fullWidth
                label="Ingrese su nombre"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type="text"
                name="apellido"
                value={usuario.apellido}
                onChange={onChangeUsuario}
                fullWidth
                label="Ingrese su apellido"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type="email"
                name="email"
                value={usuario.email}
                onChange={onChangeUsuario}
                fullWidth
                label="Ingrese su e-mail"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type="password"
                name="password"
                value={usuario.password}
                onChange={onChangeUsuario}
                fullWidth
                label="Ingrese su password"
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                color="primary"
                style={style.submit}
                onClick={RegistrarUsuario}
              >
                Registrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default RegistrarUsuarios;
