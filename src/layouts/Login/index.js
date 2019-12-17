/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Checkbox,
  GridRow,
  Icon
} from "semantic-ui-react";
import useForm from "react-hook-form";
import { Container, Card } from "react-materialize/";
import { api } from "../../services";
import { login } from "../../services/auth";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [toPerfil, setToPerfil] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = async (data) => {
    await api
      .post("auth/v1/api/login", data)
      .then((resp) => {
        if (resp.status === 200) {
          login(resp.data.token);
          localStorage.setItem("apelido", data.apelido);
          setToPerfil(true);
        }
      })
      .catch((err) => {
        setError("Usuario e/ou senha incorretos");
      });
  };
  return (
        <div className="ui container">
            {toPerfil ? (
                <Redirect to={`/perfil/${localStorage.getItem("apelido")}`} />
            ) : null}
            <div className="ui breadcrumb">
                <NavLink to="/">
                    <a style={{ color: "white" }} className="">
                        Home
                    </a>
                </NavLink>
                <div className="divider"> / </div>
                <div style={{ color: "#6435c9" }} className="active section">
                    Login
                </div>
            </div>
            <div
              style={{ marginTop: "5%" }}
              className="ui raised very padded text container segment"
            >
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2 className="ui teal image header">
                            <div
                              style={{ color: "#6435c9" }}
                              className="content"
                            >
                                Acesse sua conta
                            </div>
                        </h2>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="ui large form"
                        >
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon" />
                                        <input
                                          type="text"
                                          name="apelido"
                                          id="apelido"
                                          ref={register({ required: true })}
                                          placeholder="Digite seu apelido cadastrado"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon" />
                                        <input
                                          type="password"
                                          name="senha"
                                          id="senha"
                                          ref={register({ required: true })}
                                          placeholder="Digite sua senha"
                                        />
                                    </div>
                                </div>
                                <button
                                  style={{ backgroundColor: "#6435c9" }}
                                  disabled={errors.apelido || errors.senha}
                                  type="submit"
                                  className="ui fluid large teal submit button"
                                >
                                    Acessar
                                </button>
                            </div>

                            <div className="">
                                <ul>
                                    <li>
                                        {errors.apelido && (
                                            <small>
                                                Esqueceram de mim, fala ai seu
                                                apelido
                                            </small>
                                        )}
                                    </li>
                                    <li>
                                        {errors.senha && (
                                            <small>
                                                Acho que esta faltando a senha
                                            </small>
                                        )}
                                    </li>
                                    <li>
                                        {error && (
                                            <p className="margin medium-small">
                                                {error}
                                            </p>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </form>

                        <div
                          style={{ backgroundColor: "#21ba45" }}
                          className="ui message"
                        >
                            <NavLink to="/cadastro">
                                Não tem conta? Crie agora é gratis!
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
