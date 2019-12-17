import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/Header/navbar.css";
import { Avatar } from "@material-ui/core";
import Container from "react-materialize/lib/Container";
import { NavBar } from "../../../styles/Header/styles";
import { api } from "../../../services";
import userPic from "../../../assets/flat-geometric-shapes-background/user.png";

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

export default () => {
  const [usuario, setUsuario] = useState({});
  console.log(usuario);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [foto, setFoto] = useState("");
  const id = localStorage.getItem("apelido");

  const handleClick = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const buscaUsuario = async () => {
      const apelido = localStorage.getItem("apelido");
      setLoading(true);
      await api
        .get(`auth/v1/api/usuarios/apelido/${apelido}`)
        .then((res) => {
          setUsuario(res.data);
          setLoad(true);
          setLoading(false);
          setFoto(res.data.fotoPerfil.pic);
        })
        .catch((err) => console.log(err));
    };
    buscaUsuario();
  }, []);

  console.log(foto);

  return (
    <>
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
                                <NavLink to={`/perfil/${id}`}>
                                    <img
                                      className="ui avatar image"
                                      src={userPic}
                                    />
                                </NavLink>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" onClick={handleClick}>
                                Sair
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
            {/* <Navbar className="nav-color">
                <NavLink className="brand-logo center" to="/">
                    BORA
                </NavLink>
                <NavLink to="/" onClick={handleClick}>
                    sair
                </NavLink>
                {load ? (
                    <NavItem>
                        <Dropdown
                          trigger={(
                                <Avatar
                                  style={{ position: "absolute", top: "17%" }}
                                  src={
                                        usuario.fotoPerfil !== null && undefined
                                          ? `data:image/jpeg;base64,${foto}`
                                          : userPic
                                    }
                                />
                              )}
                        >
                            <NavLink to="/">Home</NavLink>
                            <NavLink to={`/perfil/${id}`}>Perfil</NavLink>
                            <NavItem divider />
                            <NavItem />
                        </Dropdown>
                    </NavItem>
                ) : (
                    <p>loading</p>
                )}
            </Navbar> */}
    </>
  );
};
// <nav>
//     <div class="nav-wrapper">
//         <a href="#!" class="brand-logo">
//             <i class="material-icons">cloud</i>Logo
//         </a>
//         <ul class="right hide-on-med-and-down">
//             <li>
//                 <a href="sass.html">
//                     <i class="material-icons">search</i>
//                 </a>
//             </li>
//             <li>
//                 <a href="badges.html">
//                     <i class="material-icons">view_module</i>
//                 </a>
//             </li>
//             <li>
//                 <a href="collapsible.html">
//                     <i class="material-icons">refresh</i>
//                 </a>
//             </li>
//             <li>
//                 <a href="mobile.html">
//                     <i class="material-icons">more_vert</i>
//                 </a>
//             </li>
//         </ul>
//     </div>
// </nav>
//    );
