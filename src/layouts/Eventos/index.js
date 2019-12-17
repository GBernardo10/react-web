/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
/* eslint-disable no-inner-declarations */
/* eslint-disable react/jsx-one-expression-per-line */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useRouteMatch } from "react-router-dom";
import { Map, InfoWindow, Marker } from "google-maps-react";
import { Today } from "@material-ui/icons";

import bg from "../../assets/flat-geometric-shapes-background/bg-detalheEventos.png";
import imgUser from "../../assets/flat-geometric-shapes-background/user.png";
import description from "../../assets/img/undraw_zoom_in_1txs.svg";
import calendar from "../../assets/img/undraw_calendar_dutt.svg";
import { api } from "../../services";
import "../../styles/perfil/perfil.css";
import { Container } from "react-materialize";
import { Icon } from "semantic-ui-react";

export default (props) => {
  const url = useRouteMatch().params;
  const [eventos, setEventos] = useState({});
  const [endereco, setEnderecos] = useState({});
  const [coordenadasEnderecos, setCoordenadasEnderecos] = useState({});
  const [geo, setGeo] = useState({
    latitude: "",
    longitude: ""
  });
  const [load, setLoad] = useState(false);
  const [posicao, setPosicao] = useState(false);
  const [loading, setLoading] = useState(false);
  const dados = [
    { lat: 47.49855629475769, lng: -122.14184416996333, id: 1 },
    { lat: 47.359423, lng: -122.021071, id: 2 },
    { lat: 47.2052192687988, lng: -121.988426208496, id: 3 },
    { lat: 47.6307081, lng: -122.1434325, id: 4 },
    { lat: 47.3084488, lng: -122.2140121, id: 5 },
    { lat: 47.5524695, lng: -122.0425407, id: 6 }
  ];
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const handleClick = (marker, event) => {
    console.log({ marker });
    // this.setState({ selectedMarker: marker })
  };

  const onMarkerClick = (props, marker, e) => {
    setShowingInfoWindow(true);
  };

  const teste = () => {
    alert("ok");
  };

  useEffect(() => {
    const buscaEventos = async () => {
      setLoading(true);
      await api
        .get(`eventos/${url.id}`)
        .then((res) => {
          setEventos(res.data);
          setEnderecos("rua valenca do minho 159");
          setLoad(true);
          setLoading(false);
          const dd = "rua valenca do minho 159";
          axios
            .get(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${dd},&key=AIzaSyDTjPz7a0H6P78ccjbZHuL0fpPOY8UwQN4`
            )
            .then((rd) => setCoordenadasEnderecos(rd.data));
        })
        .catch((err) => console.log(err));
    };
    buscaEventos();
  }, []);

  const geoLocation = window.navigator.geolocation.getCurrentPosition(
    (positon) => {
      setGeo({
        ...geo,
        latitude: positon.coords.latitude,
        longitude: positon.coords.longitude
      });
      // setLoad(true);
    }
  );

  useEffect(() => {
    setInterval(() => {
      if (geo) setPosicao(true);
    }, 1000);
    clearInterval();
  });

  return (
    <>
            <div className="ui container">
                <div className="ui breadcrumb">
                    <a className="section">Home</a>
                    <div className="divider">/</div>
                    <a className="section">Perfil</a>
                    <div className="divider">/</div>
                    <a className="section">Eventos</a>
                    <div className="divider">/</div>
                    <a className="active section">Detalhe</a>
                </div>
                <div className="ui horizontal divider" />
                <div className="ui main text container">
                    <h1 style={{ color: "white" }} className="ui header">
                        Detalhe do evento
                    </h1>
                </div>
                <div className="ui horizontal divider" />
                <div className="ui grid">
                    <div className="column">
                        <div className="ui segment">
                            <img className="ui fluid image" src={bg} />
                            <div className="ui grid">
                                <div className="four wide column">
                                    <h1 className="ui header">
                                        Nome do evento
                                    </h1>
                                </div>
                                <div className="five wide column">
                                    <h1 className="ui header">Organizador:</h1>
                                </div>
                                <div className="five wide column">
                                    <button
                                      style={{ width: "30%" }}
                                      className="positive ui right floated button"
                                    >
                                        <Icon name="thumbs up outline" />
                                        Participar
                                    </button>
                                    <button
                                      style={{ width: "30%" }}
                                      className="positive ui right floated button"
                                    >
                                        <Icon name="edit outline icon" />
                                        Editar
                                    </button>
                                </div>

                                <div className="four wide column">
                                    <p>Nome do evento</p>
                                </div>
                                <div className="four wide column">
                                    <p>Organizador</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui horizontal divider" />
                <div className="ui two column centered grid">
                    <div className="six wide column">
                        <div className="ui segment">
                            <div className="ui items">
                                <div className="item">
                                    <div className="image">
                                        <img src={description} />
                                    </div>
                                    <div className="content">
                                        <a className="header">Descrição</a>
                                        <div className="description">
                                            <p>Sem descrição</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="six wide column">
                        <div className="ui segment">
                            <div className="ui items">
                                <div className="item">
                                    <div className="image">
                                        <img src={calendar} />
                                    </div>
                                    <div className="content">
                                        <a className="header">
                                            Informações Uteis
                                        </a>
                                        <div className="description">
                                            <div className="middle aligned content">
                                                <div className="header">
                                                    <Icon name="clock outline" />
                                                    Horario:hh:MM às hh:MM
                                                </div>
                                                <div className="header">
                                                    <Icon name="calendar alternate outline icon" />
                                                    Dia:
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui one column centered grid">
                    <div className="ui segment">
                        <div
                          style={{ width: "80vw", height: "50vh" }}
                          className="ui fluid card"
                        >
                            {posicao ? (
                                <Map
                                  google={google}
                                  zoom={12}
                                  initialCenter={{
                                    lat: geo.latitude,
                                    lng: geo.longitude
                                    // lat: -23.5649413,
                                    // lng: -46.4773048
                                  }}
                                >
                                    {console.log(geo)}
                                    <Marker
                                      position={{
                                        lat: geo.latitude,
                                        lng: geo.longitude
                                      }}
                                    />
                                </Map>
                            ) : null}
                        </div>
                        <div className="description">
                            <div className="header">
                                <Icon name="map marker alternate" />
                                Local:
                            </div>
                        </div>
                    </div>
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
                                        {eventos.titulo}
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Titulo
                                    </p>
                                </div>
                                <div className="col s2 center-align">
                                    <h4 className="card-title grey-text text-darken-4">
                                        {eventos.length}
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Participantes
                                    </p>
                                </div>
                                <div className="col s2 center-align">
                                    <h4 className="card-title grey-text text-darken-4">
                                        6
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Completed Projects
                                    </p>
                                </div>
                                <div className="col s3 center-align">
                                    <h4 className="card-title grey-text text-darken-4">
                                        $ 1,253,000
                                    </h4>

                                    <a className="waves-effect waves-light btn">
                                        <i className="material-icons left">
                                            cloud
                                        </i>
                                        Participar
                                    </a>
                                </div>
                                <div className="col s12 right-align">
                                    <NavLink to={`editar/${url.id}`}>
                                        <a className="btn-floating activator waves-effect waves-light darken-2 right">
                                            <i className="material-icons prefix">
                                                edit
                                            </i>
                                        </a>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="card-panel teal">
                            <span className="card-title">Descrição</span>
                            <div className="card-content">
                                <p className="white-text">
                                    {eventos.descricao}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card-panel deep-purple">
                            <span className="card-title">Informações</span>
                            <div className="card-content">
                                <div className="row">
                                    <i className="material-icons left">
                                        date_range
                                    </i>
                                    <p className="black-text ">
                                        Começa no dia:{" "}
                                        <span className="white-text">
                                            {eventos.dataInicio}
                                        </span>
                                        <i className="material-icons">
                                            access_time
                                        </i>
                                        Inicia às: {eventos.horaInicio}
                                    </p>
                                    <i className="material-icons left">
                                        date_range
                                    </i>
                                    <p className="black-text ">
                                        Termina no dia:
                                        <span className="white-text">
                                            {eventos.dataFim}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="card">
                            <div className="card-image">
                                <div style={{ height: "100vh", width: "100%" }}>
                                    {load ? (
                                        <Map
                                          disableDefaultUI
                                          google={google}
                                          zoom={12}
                                          style={mapStyles}
                                          initialCenter={{
                                            lat: geo.latitude,
                                            lng: geo.longitude
                                          }}
                                        >
                                            <CustomMarker />
                                            <Marker
                                              position={{
                                                lat: geo.latitude,
                                                lng: geo.longitude
                                              }}
                                            />

                                            {dados.map((value) => (
                                                <Marker
                                                  name="ds"
                                                  key={value.id}
                                                  onClick={() => console.log(value.id)}
                                                  position={{
                                                      lat: value.lat,
                                                      lng: value.lng
                                                    }}
                                                />
                                            ))}
                                            {console.log()}
                                            <InfoWindow
                                                marker={this.state.activeMarker}
                                              visible={showingInfoWindow}
                                                   onClose={this.onClose}
                                            >
                                                <div>
                                                    <h4>teste</h4>
                                                </div>
                                            </InfoWindow>

                                            <Marker
                                        position={{
                                            lat: value[0].geometry.location.lat,
                                            lng: value[0].geometry.location.lng
                                        }}
                                    />
                                        </Map>
                                    ) : null}
                                </div>
                                <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                                <p>
                                    I am a very simple card. I am good at
                                    containing small bits of information. I am
                                    convenient because I require little markup
                                    to use effectively.
                                </p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container> */}
    </>
  );
};
