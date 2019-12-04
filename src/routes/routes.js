/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-materialize";
// import Home from "../layouts/Home";
// import EditarEvento from "../layouts/Eventos/Editar";
// import Login from "../layouts/Login";
// import CadastroUsuario from "../layouts/Cadastro/Usuario";
// import DetalheEvento from "../layouts/Eventos";
// import Perfil from "../layouts/Perfil";
import { isAuthenticated } from "../services/auth";
import Loading from "../components/Loading";

const Home = lazy(() => import("../layouts/Home"));
const EditarEvento = lazy(() => import("../layouts/Eventos/Editar"));
const Login = lazy(() => import("../layouts/Login"));
const CadastroUsuario = lazy(() => import("../layouts/Cadastro/Usuario"));
const DetalheEvento = lazy(() => import("../layouts/Eventos"));
const Perfil = lazy(() => import("../layouts/Perfil"));

function WaitingComponent(Component) {
    return props => (
        <Suspense fallback={<Loading />}>
            <Component {...props} />
        </Suspense>
    );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/login", state: { from: props.location } }}
                />
            )
        }
    />
);

export default () => (
    <main>
        <Switch>
            <Route exact path="/" component={WaitingComponent(Home)} />
            <Route exact path="/login" component={WaitingComponent(Login)} />
            <Route
                exact
                path="/cadastro"
                component={WaitingComponent(CadastroUsuario)}
            />
            <Route
                exact
                path="/perfil/:apelido"
                component={WaitingComponent(Perfil)}
            />
            <Route
                exact
                path="/perfil/eventos/:id"
                component={WaitingComponent(DetalheEvento)}
            />
            <Route
                exact
                path="/perfil/eventos/editar/:id"
                component={WaitingComponent(EditarEvento)}
            />
        </Switch>
    </main>
);
