/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/order */
import axios from "axios";

import { Modal, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "../../styles/Home/home.css";
import { NavLink, Redirect } from "react-router-dom";
import useForm from "react-hook-form";
import Card from "react-materialize/lib/Card";
import Container from "react-materialize/lib/Container";
import { isAuthenticated } from "../../services/auth";
import { api } from "../../services";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [temCoord, setTemCoord] = useState(false);
  const [coordenada, setCoordenada] = useState({});
  const [endereco, setEndereco] = useState({});
  const [usuarioNaoLogado, setUsuarioNaoLogado] = useState(false);


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
                <Container>
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
                </Container>
            </Modal>
            <div className="row">
                <div className="header-home">
                    <h1>O que voce quer fazer ?</h1>
                    <div className="input-field col s12">
                        <input
                          type="text"
                          id="autocomplete-input"
                          className="input-home autocomplete search-box validate white search-circle"
                          placeholder="Pesquise eventos, roles, lugares, shows, Bora !"
                        />
                        <i className="material-icons prefix">search</i>
                    </div>
                    <div className="section-botoes section scrollspy">
                        {isAuthenticated() ? (
                            <a
                              onClick={handleOpen}
                              className="col s6 button-bora waves-effect waves-light btn-large"
                            >
                                <i className="material-icons left">cloud</i>
                                Criar Role
                            </a>
                        ) : (
                            <a
                              onClick={handleOpenNotAutenticado}
                              className="col s6 button-bora waves-effect waves-light btn-large"
                            >
                                <i className="material-icons left">cloud</i>
                                Criar Role
                            </a>
                        )}

                        <a className="col s5 button-bora waves-effect waves-light purple darken-4 btn-large">
                            <i className="material-icons left">cloud</i>
                            Bora
                        </a>
                    </div>
                </div>
            </div>
        </main>
  );
};
