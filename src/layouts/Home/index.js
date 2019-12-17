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
// import { Modal, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useForm from "react-hook-form";
import Card from "react-materialize/lib/Card";
import Container from "react-materialize/lib/Container";
import { NavLink } from "react-router-dom";
import { Divider, Icon, Modal } from "semantic-ui-react";
import bg from "../../assets/flat-geometric-shapes-background/bg-detalheEventos.png";
import bg2 from "../../assets/img/undraw_observations_mejb.svg";
import { Eventos } from "../../components/ListEventos";
import { api } from "../../services";
import { isAuthenticated } from "../../services/auth";
import "../../styles/Home/home.css";

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
  const [inputs, setInputs] = useState("");
  const dados = [
    {
      idEvento: 10,
      titulo: "beach bar",
      dataInicio: "10/10/2019",
      dataFim: "20/12/2019",
      horaInicio: "12:00",
      horaFim: "22:00",
      descricao: "beber ate cair",
      rua: "Alameda Santos",
      numero: "2456",
      cep: "01419-002",
      bairro: "Jardim Paulista",
      latitude: -23.5572013,
      longitude: 46.6631637
    },
    {
      idEvento: 11,
      titulo: "Beach beer",
      dataInicio: "19/12/2019",
      dataFim: "18/12/2019",
      horaInicio: "02:00",
      horaFim: "22:00",
      descricao: "curtir um rolê",
      rua: "Alameda Santos",
      numero: "2456",
      cep: "01419-002",
      bairro: "Jardim Paulista",
      latitude: -23.5572013,
      longitude: 46.6631637
    },
    {
      idEvento: 17,
      titulo: "Bella jaú",
      dataInicio: "10/10/19",
      dataFim: "20/12/19",
      horaInicio: "03:00",
      horaFim: "22:00",
      descricao: "Bora tomar umas",
      rua: "Alameda Jaú",
      numero: "2027",
      cep: "01420-002",
      bairro: "Jardim Paulista",
      latitude: -23.5568372,
      longitude: -46.665511
    },
    {
      idEvento: 28,
      titulo: "casa",
      rua: "Rua Valença do Minho",
      numero: "159",
      cep: "03583040",
      bairro: "Jardim Brasília (Zona Leste)",
      latitude: -23.5582989,
      longitude: -46.4955618
    },
    {
      idEvento: 16,
      titulo: "Espaço Augusta",
      dataInicio: "10/10/19",
      dataFim: "20/12/19",
      horaInicio: "03:00",
      horaFim: "22:00",
      descricao: "Bora tomar umas",
      rua: "Rua Augusta",
      numero: "2040",
      cep: "01413-100",
      bairro: "Cerqueira César",
      latitude: -23.5627644,
      longitude: -46.6652983
    },
    {
      idEvento: 18,
      titulo: "Kart no shopping morumbi",
      rua: "Rua Voluntários da Pátria",
      numero: "100",
      cep: "02010000",
      bairro: "Santana",
      latitude: -23.5122048,
      longitude: -46.3591305
    },
    {
      idEvento: 9,
      titulo: "McDonalds",
      dataInicio: "10/10/2019",
      dataFim: "20/12/2019",
      horaInicio: "12:00",
      horaFim: "22:00",
      descricao: "se reunir no mac donalds",
      rua: "Av. Paulista",
      numero: "2034",
      cep: "01310-300",
      bairro: "Bela Vista",
      latitude: -23.5585806,
      longitude: -46.6593165
    },
    {
      idEvento: 8,
      titulo: "masp",
      dataInicio: "10/10/2019",
      dataFim: "20/12/2019",
      horaInicio: "12:00",
      horaFim: "22:00",
      descricao: "encontro no masp como nos velhos tempo",
      rua: "Av. Paulista, 1578",
      numero: "1578",
      cep: "01310-200",
      bairro: "Bela Vista",
      latitude: -23.56108,
      longitude: -46.655961
    },
    {
      idEvento: 19,
      titulo: "nove",
      rua: "rua dois",
      numero: "159",
      bairro: "jardim"
    },
    {
      idEvento: 20,
      titulo: "nove",
      rua: "rua dois",
      numero: "159",
      bairro: "jardim"
    },
    {
      idEvento: 21,
      titulo: "noveeee",
      rua: "rua dois",
      numero: "159",
      bairro: "jardim"
    },
    {
      idEvento: 22,
      titulo: "noveeee",
      rua: "rua dois",
      numero: "159",
      bairro: "jardim"
    },
    {
      idEvento: 23,
      titulo: "noveeee",
      rua: "rua dois",
      numero: "159",
      bairro: "jardim"
    },
    {
      idEvento: 24,
      titulo: "que",
      rua: "rua dois",
      numero: "159"
    },
    {
      idEvento: 25,
      titulo: "que",
      rua: "rua dois",
      numero: "159"
    },
    {
      idEvento: 26,
      titulo: "que",
      rua: "rua dois",
      numero: "159"
    },
    {
      idEvento: 27,
      titulo: "que",
      rua: "rua dois",
      numero: "159"
    },
    {
      idEvento: 15,
      titulo: "Starbucks",
      dataInicio: "10/10/19",
      dataFim: "20/12/19",
      horaInicio: "19:00",
      horaFim: "22:00",
      descricao: "Bora tomar um café",
      rua: "Rua Haddock Lobo",
      numero: "608",
      cep: "01414-002",
      bairro: "Cerqueira César",
      latitude: -23.5658224,
      longitude: -46.6699399
    }
  ];

  const verifica = () => {
    console.log(results);
    if (results.length > 0) {
      setLoadEventos(true);
    }
  };

  const pesquisar = () => {
    api.get(`pesquisa/v1/api/eventos/pesquisa/${inputs}`)
      .then((res) => {
        setResults(res.data);
        console.log(`${res.data}o que ta acontecedo`);
      })
      .catch((err) => console.error(err));
    verifica();
  };

  console.log(`${results}resultado`);
  useEffect(() => {
    const carregaEventos = () => {
      api.get("eventos/v1/api/eventos").then((res) => {
        setAllEventos(res.data);
        setLoadAllEventos(true);
      });
    };
    carregaEventos();
  }, []);
  let teste = allEventos.slice(1, 5);
  console.log(teste);

  //   const API_URL = "https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b";

  //   const handleInputChange = (e) => {
  //     setInputs(e.target.value);
  //   };

  const handleInputChange = (e) => {
    setInputs(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    api.post("eventos/v1/api/eventos", data).then((res) => {
      if (res.status === 201) {
        handleClose();
        alert("Evento criado com sucesso");
      } else {
        alert(
          "Não foi possivel criar o evento, tente novamente mais tarde !"
        );
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
            <Modal open={usuarioNaoLogado} onClose={handleCloseNotAutenticado}>
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
                                  onChange={handleInputChange}
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
                          onClick={pesquisar}
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
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "60%",
                    marginLeft: "20%"
                  }}
                  className="ui three column grid"
                >
                    {loadEventos ? (
                        <Eventos dados={results} />
                    ) : loadAllEventos ? (
                      allEventos.slice(0, 8).map((res) => (
                            <div style={{ margin: "14%" }} className="col s4">
                                <span key={res.idEvento}>
                                    {console.log(res)}
                                    <div className="">
                                        <div className="column">
                                            <div className="ui fluid card">
                                                <NavLink
                                                  to={`/perfil/eventos/${res.idEvento}`}
                                                >
                                                    <div className="image">
                                                        <img src={bg2} />
                                                    </div>
                                                </NavLink>
                                                <div className="content">
                                                    <a className="header">
                                                        {res.titulo}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                      ))
                    ) : null}
                </div>
            </div>
        </main>
  );
};
