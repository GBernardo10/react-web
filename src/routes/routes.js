/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-materialize";
import Home from "../layouts/Home";
import EditarEvento from "../layouts/Eventos/Editar";
import Login from "../layouts/Login";
import CadastroUsuario from "../layouts/Cadastro/Usuario";
import DetalheEvento from "../layouts/Eventos";
import Perfil from "../layouts/Perfil";
import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (isAuthenticated() ? (
                <Component {...props} />
      ) : (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.location } }}
                />
      ))}
    />
);

export default () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro" component={CadastroUsuario} />
            <Route exact path="/perfil/:apelido" component={Perfil} />
            <Route exact path="/perfil/eventos/:id" component={DetalheEvento} />
            <Route exact path="/perfil/eventos/editar/:id" component={EditarEvento} />
        </Switch>
    </main>
);
