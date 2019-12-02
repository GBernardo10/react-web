import React from "react";
import { Navbar } from "react-materialize";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

export const Header = () => (
    <Navbar className="purple darken-3">
        <NavLink className="brand-logo center" to="/">
            BORA
        </NavLink>
        <NavLink className="login" activeClassName="active" to="/login">Login</NavLink>
        <NavLink className="cadastro" activeClassName="active" to="/cadastro">Cadastro</NavLink>
    </Navbar>
);
