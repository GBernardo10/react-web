/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/order */
import axios from "axios";
import {
  Button, Header, Image, Modal, Icon, Divider
} from "semantic-ui-react";
// import { Modal, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Carousel } from "../../components/Carousel";
import "../../styles/Home/home.css";
import { NavLink, Redirect } from "react-router-dom";
import useForm from "react-hook-form";
import Card from "react-materialize/lib/Card";
import Container from "react-materialize/lib/Container";
import { isAuthenticated } from "../../services/auth";
import { api } from "../../services";
import { Eventos } from "../../components/ListEventos";
import bg from "../../assets/flat-geometric-shapes-background/bg-detalheEventos.png";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [temCoord, setTemCoord] = useState(false);
  const [coordenada, setCoordenada] = useState({});
  const [endereco, setEndereco] = useState({});
  const [usuarioNaoLogado, setUsuarioNaoLogado] = useState(false);
  const [results, setResults] = useState([]);
  const [loadEventos, setLoadEventos] = useState(false);
  const [allEventos, setAllEventos] = useState([]);
  const [loadAllEventos, setLoadAllEventos] = useState(false);

  useEffect(() => {
    const carregaEventos = () => {
      api.get("eventos").then((res) => {
        setAllEventos(res.data);
        setLoadAllEventos(true);
      });
    };
    carregaEventos();
  }, []);
  let teste = allEventos.slice(1, 5);
  console.log(teste);

  //   const API_URL = "https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b";

  const handleInputChange = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
      )
      .then((res) => {
        setResults(res.data);
        setLoadEventos(true);
      })
      .catch((err) => {
        setLoadEventos(false);
      });
    // .then(res=>setResults(res.data))
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    api.post("eventos", data).then((res) => {
      if (res.status === 201) {
        handleClose();
        alert("Evento criado com sucesso");
      } else {
        alert("erro");
      }
    });
  };

  const handleOpenNotAutenticado = () => {
    setUsuarioNaoLogado(true);
  };

  const handleCloseNotAutenticado = () => {
    setUsuarioNaoLogado(false);
  };

  async function retornaCoordenada() {
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${endereco.logradouro},&key=AIzaSyDTjPz7a0H6P78ccjbZHuL0fpPOY8UwQN4`
      )
      .then((res) => setCoordenada(res.data));
    setTemCoord(true);
  }

  const handleCEP = async (e) => {
    await axios
      .get(`https://viacep.com.br/ws/${e.target.value}/json`)
      .then((res) => {
        setEndereco(res.data);
        setLoad(true);
      })
      .catch((res) => console.log(res));
  };
  return (
        <main>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={usuarioNaoLogado}
              onClose={handleCloseNotAutenticado}
            >
                <Container>
                    <Card
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "20%"
                      }}
                    >
                        <i
                          onClick={handleCloseNotAutenticado}
                          className="material-icons prefix"
                        >
                            close
                        </i>
                        <h4 className="center-align">
                            Para criar eventos, voce deve estar logado
{" "}
                        </h4>
                        <div className="row">
                            <div className="col s12">
                                <div className="row" />
                                <div className="row">
                                    <div className="input-field col s6 m6 l6">
                                        <p className="margin medium-small">
                                            <NavLink to="/cadastro">
                                                Não tem conta? Crie agora é
                                                gratis!
                                            </NavLink>
                                        </p>
                                    </div>
                                    <div className="input-field col s6 m6 l6">
                                        <p className="margin right-align medium-small">
                                            <NavLink to="/login">
                                                Ja tem uma conta? Acesse aqui!
                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Container>
            </Modal>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
                <Modal.Header>
                    Preencha os campo para criar seu evento
                    <Icon
                      style={{ float: "right" }}
                      onClick={handleClose}
                      name="x icon"
                    />
                </Modal.Header>
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="ui large form"
                        >
                            <div className="ui stacked segment">
                                <div className="three fields">
                                    <div className="field">
                                        <div className="required field">
                                            <label htmlFor="titulo">
                                                Digite o titulo do evento
                                            </label>
                                            <div className="ui left icon input">
                                                <Icon name="smile outline" />
                                                <input
                                                  type="text"
                                                  name="titulo"
                                                  id="titulo"
                                                  ref={register({
                                                    required: true
                                                  })}
                                                  placeholder="Titulo do evento"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="required field">
                                            <label htmlFor="cep">
                                                Digite o CEP, do local do evento
                                            </label>
                                            <div className="ui left icon input">
                                                <Icon name="map marker alternate" />
                                                <input
                                                  type="text"
                                                  name="cep"
                                                  id="cep"
                                                  onBlur={
                                                        load
                                                          ? retornaCoordenada
                                                          : null
                                                    }
                                                  onChange={handleCEP}
                                                  ref={register({
                                                    required:
                                                            "Preencha o CEP, para a gente buscar o endereço :)",
                                                    pattern: {
                                                      value: /^\d{5}-?\d{3}$/,
                                                      message:
                                                                "Tem coisa errada ai, CEP não encontrado !"
                                                    }
                                                  })}
                                                  placeholder="Digite o CEP"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Rua</label>
                                        <div className="ui left icon input">
                                            <Icon name="crosshairs" />
                                            <input
                                              id="rua"
                                              type="text"
                                              name="rua"
                                              placeholder="Rua"
                                              ref={register({
                                                required: true
                                              })}
                                              disabled
                                              value={
                                                    load
                                                      ? endereco.logradouro
                                                      : null
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <div className="required field">
                                            <label htmlFor="numero">
                                                Numero
                                            </label>
                                            <div className="ui left icon input">
                                                <Icon name="compass" />
                                                <input
                                                  id="numero"
                                                  type="text"
                                                  name="numero"
                                                  placeholder="Numero"
                                                  ref={register({
                                                    required:
                                                            "Preenche o numero do local ae :)",
                                                    pattern: {
                                                      value: /^[0-9]+[a-zA-Z]*$/,
                                                      message:
                                                                "Precisa informar o numero do local correto :)"
                                                    }
                                                  })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="bairro">Bairro</label>
                                        <div className="ui left icon input">
                                            <Icon name="compass" />
                                            <input
                                              id="bairro"
                                              type="text"
                                              disabled
                                              name="bairro"
                                              placeholder="bairro"
                                              ref={register({
                                                required: true
                                              })}
                                              value={
                                                    load
                                                      ? endereco.bairro
                                                      : null
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="two fields">
                                    <button
                                      type="submit"
                                      style={{ width: "30%" }}
                                      className="ui button"
                                    >
                                        <Icon name="trash" />
                                        Deixar pra lá
                                    </button>
                                    <button
                                      type="submit"
                                      style={{ width: "100%" }}
                                      className="positive ui button"
                                    >
                                        <Icon name="check" />
                                        Criar Evento
                                    </button>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        {errors.titulo && (
                                            <small>
                                                Escolha um titulo para o seu
                                                evento
                                            </small>
                                        )}
                                    </li>
                                    <li>
                                        {errors.cep && (
                                            <small>{errors.cep.message}</small>
                                        )}
                                    </li>
                                    <li>
                                        {errors.numero && (
                                            <small>
                                                {errors.numero.message}
                                            </small>
                                        )}
                                    </li>
                                </ul>
                                <Divider />
                            </div>
                            <div style={{ display: "none" }}>
                                <input
                                  id="latitude"
                                  name="latitude"
                                  ref={register({
                                    required: true
                                  })}
                                  value={
                                        temCoord
                                          ? coordenada.results[0].geometry
                                            .location.lat
                                          : null
                                    }
                                />
                                <input
                                  id="longitude"
                                  name="longitude"
                                  ref={register({
                                    required: true
                                  })}
                                  value={
                                        temCoord
                                          ? coordenada.results[0].geometry
                                            .location.lng
                                          : null
                                    }
                                />
                                <input
                                  id="usuario"
                                  name="usuario"
                                  ref={register({
                                    required: true
                                  })}
                                  value={
                                        load
                                          ? localStorage.getItem("apelido")
                                          : null
                                    }
                                />
                            </div>
                        </form>
                    </div>
                </div>

                {/* <Container>
                    <Card>
                        <h4 className="center-align">
                            Preencha os campo para criar seu evento
                        </h4>
                        <div className="row">
                            <div className="col s12">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row" />
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">
                                                mood
                                            </i>
                                            <input
                                              className="validate"
                                              type="text"
                                              name="titulo"
                                              id="titulo"
                                              ref={register({
                                                required: true
                                              })}
                                            />
                                            <label htmlFor="titulo">
                                                Digite o titulo do evento
                                            </label>
                                            {errors.titulo && (
                                                <small>
                                                    Escolha um titulo para o seu
                                                    evento
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">
                                                room
                                            </i>
                                            <input
                                              className="validate"
                                              type="text"
                                              name="cep"
                                              id="cep"
                                              onBlur={
                                                    load
                                                      ? retornaCoordenada
                                                      : null
                                                }
                                              onChange={handleCEP}
                                              ref={register({
                                                required: true
                                              })}
                                            />
                                            <label htmlFor="cep">
                                                Digite o CEP, do local do evento
                                            </label>
                                            {errors.cep && (
                                                <small>
                                                    Preencha o CEP, para a gente
                                                    buscar o endereço :)
                                                </small>
                                            )}
                                        </div>

                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">
                                                my_location
                                            </i>
                                            <input
                                              id="rua"
                                              name="rua"
                                              placeholder="Rua"
                                              type="text"
                                              ref={register({
                                                required: true
                                              })}
                                              disabled
                                              className="validate"
                                              value={
                                                    load
                                                      ? endereco.logradouro
                                                      : null
                                                }
                                            />
                                        </div>

                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">
                                                pin_drop
                                            </i>
                                            <input
                                              id="numero"
                                              name="numero"
                                              type="text"
                                              className="validate"
                                              ref={register({
                                                required: true
                                              })}
                                            />
                                            <label htmlFor="numero">
                                                Numero
                                            </label>
                                            {errors.numero && (
                                                <small>
                                                    Preenche o numero do local
                                                    ae :) :)
                                                </small>
                                            )}
                                        </div>
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">
                                                location_city
                                            </i>
                                            <input
                                              id="bairro"
                                              type="text"
                                              name="bairro"
                                              disabled
                                              className="validate"
                                              placeholder="Bairro"
                                              ref={register({
                                                required: true
                                              })}
                                              value={
                                                    load
                                                      ? endereco.bairro
                                                      : null
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div style={{ display: "none" }}>
                                        <input
                                          id="latitude"
                                          name="latitude"
                                          ref={register({
                                            required: true
                                          })}
                                          value={
                                                temCoord
                                                  ? coordenada.results[0]
                                                    .geometry.location.lat
                                                  : null
                                            }
                                        />
                                        <input
                                          id="longitude"
                                          name="longitude"
                                          ref={register({
                                            required: true
                                          })}
                                          value={
                                                temCoord
                                                  ? coordenada.results[0]
                                                    .geometry.location.lng
                                                  : null
                                            }
                                        />
                                        <input
                                          id="usuario"
                                          name="usuario"
                                          ref={register({
                                            required: true
                                          })}
                                          value={
                                                load
                                                  ? localStorage.getItem(
                                                    "apelido"
                                                  )
                                                  : null
                                            }
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <button
                                              disabled={
                                                    errors.apelido
                                                    || errors.senha
                                                }
                                              type="submit"
                                              name="btn_login"
                                              className="col s12 btn btn-large waves-effect indigo"
                                            >
                                                Cadastrar Evento
                                            </button>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6 m6 l6">
                                                {error && (
                                                    <p className="margin medium-small">
                                                        {error}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Card>
                </Container> */}
            </Modal>
            <div className="row">
                <div className="header-home">
                    <h1 className="titulo-home">O que voce quer fazer ?</h1>
                    <div className="input-field col s12">
                        {/* <div className="field"> */}
                        <div className="ui search">
                            <div className="ui massive icon input">
                                <input
                                  style={{ width: "100%" }}
                                  className="input-home"
                                  type="text"
                                  placeholder="Pesquise eventos, roles, lugares, shows, Bora !"
                                />
                                <i className="search icon" />
                            </div>
                            <div className="results" />
                        </div>
                        {/* </div> */}
                        {/* <input
                            onChange={handleInputChange}
                            type="text"
                            id="autocomplete-input"
                            className="input-home autocomplete search-box validate white search-circle"
                            placeholder="Pesquise eventos, roles, lugares, shows, Bora !"
                          />
                          <i className="material-icons prefix">search</i> */}
                    </div>
                    <div className="section-botoes section scrollspy">
                        {isAuthenticated() ? (
                            <button
                              onClick={handleOpen}
                              style={{ width: "30%" }}
                              className="positive ui button"
                            >
                                <Icon name="share alternate icon" />
                                Criar Role
                            </button>
                        ) : (
                            // <a
                            //   style={{ backgroundColor: "#721734" }}
                            //   onClick={handleOpen}
                            //   className="col s6 button-bora waves-effect waves-light btn-large"
                            // >
                            //     <i className="material-icons left">share</i>
                            //     Criar Role
                            // </a>
                            // <a
                            //   style={{ backgroundColor: "#721734" }}
                            //   onClick={handleOpenNotAutenticado}
                            //   className="col s6 button-bora waves-effect waves-light btn-large"
                            // >
                            //     <i className="material-icons left">share</i>
                            //     Criar Role
                            // </a>
                            <button
                              onClick={handleOpenNotAutenticado}
                              style={{ width: "30%" }}
                              className="positive ui button"
                            >
                                <Icon name="share alternate icon" />
                                Criar Role
                            </button>
                        )}
                        <button
                          style={{ width: "30%" }}
                          className="ui violet button"
                        >
                            <Icon name="child" />
                            Bora
                        </button>

                        {/* <a className="col s5 button-bora waves-effect waves-light purple darken-4 btn-large">
                            <i className="material-icons left">
                                sentiment_very_satisfied
                            </i>
                            Bora
                        </a> */}
                    </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#2b0125",
                    with: "100%",
                    height: "70px"
                  }}
                />
            </div>
            <div className="row">
                <Container>
                    {loadEventos ? (
                        <Eventos dados={results} />
                    ) : loadAllEventos ? (
                      allEventos.slice(0, 8).map((res) => (
                            <div className="col s4">
                                <span key={res.idEvento}>
                                    {console.log(res)}
                                    <div className="card">
                                        <div className="card-image">
                                            <img
                                              style={{
                                                backgroundSize: "cover"
                                              }}
                                              src={bg}
                                            />
                                            <span className="truncate card-title">
                                                <p className="color-titulo-home">
                                                    {res.titulo}
                                                </p>
                                            </span>
                                        </div>
                                        <div className="card-content">
                                            <p>{res.descricao}</p>
                                        </div>
                                        <div className="card-action">
                                            <NavLink
                                              to={`/perfil/eventos/${res.idEvento}`}
                                            >
                                                Detalhes
                                            </NavLink>
                                        </div>
                                    </div>
                                </span>
                            </div>
                      ))
                    ) : null}
                </Container>
            </div>
        </main>
  );
};
