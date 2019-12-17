import React from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../styles/Header/styles";
import "../../styles/Header/navbar.css";

const toggleMenu = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7
                + 0.25}s `;
    }
  });
};

export const Header = () => (
    <NavBar>
        <nav>
            <div className="logo">
                <NavLink to="/">
                    <h4>Bora</h4>
                </NavLink>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink
                      className="cadastro"
                      activeClassName="active"
                      to="/login"
                    >
                        Entrar
                    </NavLink>
                </li>
                <li>
                    <NavLink
                      className="cadastro"
                      activeClassName="active"
                      to="/cadastro"
                    >
                        Cadastrar
                    </NavLink>
                </li>
            </ul>
            <div onClick={() => toggleMenu()} className="burger">
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
            </div>
        </nav>
    </NavBar>
);

// <Navbar className="purple darken-3">
//     <NavLink className="brand-logo center" to="/">
//         BORA
//     </NavLink>
//     <NavLink className="login" activeClassName="active" to="/login">
//         Login
//     </NavLink>
//     <NavLink className="cadastro" activeClassName="active" to="/cadastro">
//         Cadastro
//     </NavLink>
// </Navbar>;
