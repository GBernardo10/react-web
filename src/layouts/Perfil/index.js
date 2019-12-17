/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Carousel } from "../../components/Carousel";
import imgUser from "../../assets/flat-geometric-shapes-background/user.png";
import { api } from "../../services";
import "../../styles/perfil/perfil.css";
import Container from "react-materialize/lib/Container";
import { Icon } from "semantic-ui-react";

export default () => {
  const [usuario, setUsuario] = useState({});
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [eventosOrganizados, setEventosOrganizados] = useState([
    {
      idEvento: "1",
      titulo: "teste"
    },
    {
      idEvento: "2",
      titulo: "teste2"
    },
    {
      idEvento: "3",
      titulo: "teste"
    }
  ]);
  console.log(`usuario ${usuario}`);
  console.log(`eventos ${eventosOrganizados}`);
  const quantidadeEventosOrganizado = [];
  let contador = 0;
  console.log(usuario);

  const url = useRouteMatch().params;

  useEffect(() => {
    const buscaUsuario = async () => {
      setLoading(true);
      await api
        .get(`usuarios/apelido/${localStorage.getItem("apelido")}`)
        .then((res) => {
          setUsuario(res.data);
          setEventosOrganizados(res.data.eventosOrganizados);
          console.log(res.data);
          setLoad(true);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    buscaUsuario();
  }, []);

  if (load && eventosOrganizados.length > 0) {
    quantidadeEventosOrganizado.push(usuario.eventosOrganizados);

    for (
      let index = 0;
      index < quantidadeEventosOrganizado[0].length;
      index++
    ) {
      contador++;
    }
  }
  return (
    <>
            <div className="ui container">
                <div className="ui breadcrumb">
                    <a className="section">Home</a>
                    <div className="divider">/</div>
                    <a className="active section">Perfil</a>
                </div>
                <div className="ui horizontal divider" />
                <div className="ui main text container">
                    <h1 style={{ color: "white" }} className="ui header">
                        Meu Perfil
                    </h1>
                </div>
                <div className="ui horizontal divider" />
                <div className="ui four column grid">
                    <div className="row">
                        <div className="twelve wide column">
                            <div className="ui segment">
                                <div className="ui items">
                                    <div className="item">
                                        <div
                                            style={{ width: "1%" }}
                                            className="content"
                                        >
                                            <p className="header">
                                                Meus Eventos
                                            </p>
                                            <div className="description">
                                                {!load ? (
                                                    <Carousel>
                                                        {!load
                                                          ? eventosOrganizados.map(
                                                            (d, i) => (
                                                                      <div
                                                                          key={
                                                                              i
                                                                          }
                                                                          className="ui card"
                                                                      >
                                                                          <div className="image">
                                                                              <img
                                                                                  src={
                                                                                      imgUser
                                                                                  }
                                                                              />
                                                                          </div>
                                                                          <div className="content">
                                                                              <a className="header">
                                                                                  Kristy
                                                                              </a>
                                                                              <div className="meta">
                                                                                  <span className="date">
                                                                                      Joined
                                                                                      in
                                                                                      2013
                                                                                  </span>
                                                                              </div>
                                                                              <div className="description">
                                                                                  Kristy
                                                                                  is
                                                                                  an
                                                                                  art
                                                                                  director
                                                                                  living
                                                                                  in
                                                                                  New
                                                                                  York.
                                                                              </div>
                                                                          </div>
                                                                          <div className="extra content">
                                                                              <a>
                                                                                  <Icon name="zoom-in" />
                                                                                  <NavLink
                                                                                      to={`eventos/${d.idEvento}`}
                                                                                  >
                                                                                      Detalhe
                                                                                  </NavLink>
                                                                              </a>
                                                                          </div>
                                                                      </div>
                                                            )
                                                          )
                                                          : null}
                                                    </Carousel>
                                                ) : (
                                                    <p>
                                                        Ainda nao criou nenhum
                                                        evento, deseja criar um
                                                        evento? Clique aqui
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui segment">
                                <div className="ui items">
                                    <div className="item">
                                        <span className="ui tiny image">
                                            <img src={imgUser} />
                                        </span>
                                        <div className="content">
                                            <p className="header">
                                                Guilherme Jesus
                                            </p>
                                            <div className="description">
                                                <p>dsds</p>
                                            </div>
                                            <div className="extra">
                                                <div className="ui label">
                                                    <i className="trophy icon" />
                                                    Iniciante
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column" />
                    </div>

                    <div className="twelve wide column">
                        <div className="ui segment">
                            <div className="ui items">
                                <div className="item">
                                    <div className="content">
                                        <p className="header">
                                            Eventos que participei
                                        </p>
                                        <div className="description">
                                            {load ? (
                                                <Carousel>
                                                    {load
                                                      ? eventosOrganizados.map(
                                                        (d, i) => (
                                                                  <div
                                                                      key={i}
                                                                      className="ui card"
                                                                  >
                                                                      <div className="image">
                                                                          <img src="/images/avatar2/large/kristy.png" />
                                                                      </div>
                                                                      <div className="content">
                                                                          <a className="header">
                                                                              Kristy
                                                                          </a>
                                                                          <div className="meta">
                                                                              <span className="date">
                                                                                  Joined
                                                                                  in
                                                                                  2013
                                                                              </span>
                                                                          </div>
                                                                          <div className="description">
                                                                              Kristy
                                                                              is
                                                                              an
                                                                              art
                                                                              director
                                                                              living
                                                                              in
                                                                              New
                                                                              York.
                                                                          </div>
                                                                      </div>
                                                                      <div className="extra content">
                                                                          <a>
                                                                              <i className="user icon" />
                                                                              22
                                                                              Friends
                                                                          </a>
                                                                      </div>
                                                                  </div>
                                                        )
                                                      )
                                                      : null}
                                                </Carousel>
                                            ) : (
                                                <p>
                                                    Ainda nao participou de
                                                    nenhum evento
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column" />
                    <div className="column" />
                    <div className="column" />
                </div>
            </div>

            {/* <Container>
                <div className="container" />
                <div id="profile-page" className="section">
                    <div id="profile-page-header" className="card">
                        <div className="card-image">
                            <img
                                className="activator"
                                src={bg}
                                alt="user background"
                            />
                        </div>
                        <figure className="card-profile-image">
                            <img
                                src={imgUser}
                                alt="profile image"
                                className="circle z-depth-2 responsive-img activator"
                            />
                        </figure>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s3 offset-s2">
                                    <h4 className="card-title grey-text text-darken-4">
                                        {usuario.apelido}
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Iniciante
                                    </p>
                                </div>
                                <div className="col s2 center-align">
                                    <h4 className="card-title grey-text text-darken-4">
                                        {contador}
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Eventos Organizado
                                    </p>
                                </div>
                                <div className="col s2 center-align">
                                    <h4 className="card-title grey-text text-darken-4">
                                        {}
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Eventos Participante
                                    </p>
                                </div>
                                <div className="col s2 center-align">
                                    <h4 className="card-title grey-text text-darken-4">
                                        $ 1,253,000
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Busness Profit
                                    </p>
                                </div>
                                <div className="col s1 right-align">
                                    <a className="btn-floating activator waves-effect waves-light darken-2 right">
                                        <i className="material-icons">edit</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="header">Eventos Organizado</h2>
                {load ? (
                    <Carousel>
                        {load
                          ? eventosOrganizados.map((d, i) => (
                                  <span key={i}>
                                      <div className="row">
                                          <div className="col s12 m7">
                                              <div className="card">
                                                  <div className="card-image">
                                                      <img src={imgUser} />
                                                      <span className="card-title">
                                                          Card Title
                                                      </span>
                                                  </div>
                                                  <div className="card-content">
                                                      <p>
                                                          I am a very simple
                                                          card. I am good at
                                                          containing small bits
                                                          of information. I am
                                                          convenient because I
                                                          require little markup
                                                          to use effectively.
                                                      </p>
                                                  </div>
                                                  <div className="card-action">
                                                      <NavLink
                                                          to={`eventos/${d.idEvento}`}
                                                      >
                                                          Detalhes
                                                      </NavLink>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </span>
                          ))
                          : null}
                    </Carousel>
                ) : null}
                <h2 className="header">Eventos confirmado</h2>
                {load ? (
                    <Carousel>
                        {load
                          ? eventosOrganizados.map((d, i) => (
                                  <span key={i}>
                                      <div className="row">
                                          <div className="col s12 m7">
                                              <div className="card">
                                                  <div className="card-image">
                                                      <img src={imgUser} />
                                                      <span className="card-title">
                                                          Card Title
                                                      </span>
                                                  </div>
                                                  <div className="card-content">
                                                      <p>
                                                          I am a very simple
                                                          card. I am good at
                                                          containing small bits
                                                          of information. I am
                                                          convenient because I
                                                          require little markup
                                                          to use effectively.
                                                      </p>
                                                  </div>
                                                  <div className="card-action">
                                                      <NavLink
                                                          to={`eventos/${d.idEvento}`}
                                                      >
                                                          Detalhes
                                                      </NavLink>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </span>
                          ))
                          : null}
                    </Carousel>
                ) : null}
            </Container> */}
    </>
  );
};
