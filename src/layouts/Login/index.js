/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Card, Container } from "react-materialize";
import useForm from "react-hook-form";
import { api } from "../../services";
import { login } from "../../services/auth";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [toPerfil, setToPerfil] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    api.post("login", data)
      .then((resp) => {
        if (resp.status === 200) setToPerfil(true);
        login(resp.data.token);
      })
      .catch((err) => {
        setError("Usuario e/ou senha incorretos");
      });
    localStorage.setItem("apelido", data.apelido);
  };
  return (
        <Container>
            <div className="container">
                {toPerfil ? <Redirect to="/perfil/:apelido" /> : null}
                <Card>
                    <h4 className="center-align">
                        Bem vindo, acesse sua conta
                    </h4>
                    <div className="row">
                        <div className="col s12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row" />
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">
                                            account_circle
                                        </i>
                                        <input
                                          className="validate"
                                          type="text"
                                          name="apelido"
                                          id="apelido"
                                          ref={register({ required: true })}
                                        />
                                        <label htmlFor="apelido">
                                            Digite seu apelido
                                        </label>
                                        {errors.apelido && (
                                            <small>
                                                Esqueceram de mim, fala ai seu
                                                apelido
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">
                                            lock
                                        </i>
                                        <input
                                          className="validate"
                                          type="password"
                                          name="senha"
                                          id="senha"
                                          ref={register({ required: true })}
                                        />
                                        <label htmlFor="senha">
                                            Digite sua senha
                                        </label>
                                        {errors.senha && (
                                            <small>
                                                Acho que esta faltando a senha
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12 m12 l12  login-text">
                                        <input
                                          type="checkbox"
                                          id="remember-me"
                                        />
                                        <label htmlFor="remember-me">
                                            Lembrar de mim
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <button
                                          disabled={
                                                errors.apelido || errors.senha
                                            }
                                          type="submit"
                                          name="btn_login"
                                          className="col s12 btn btn-large waves-effect indigo"
                                        >
                                            Acessar
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
                                            <a href="#">Esqueceu a senha?</a>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        </Container>
  );
};
