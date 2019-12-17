/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import useForm from "react-hook-form";
import { NavLink, Redirect, Link } from "react-router-dom";
import { Card, Container } from "react-materialize";
import { api } from "../../../services";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [valido, setValido] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    api.post("auth/v1/api/usuarios", data)
      .then((respo) => {
        if (respo.status === 201) {
          setValido(true);
        }
      })
      .catch((err) => setError(
          "Apelido e/ou email ja existentes, tente outra combição :)"
        ));
  };
  return (
        <div className="ui container">
            {valido ? <Redirect to="/" /> : null}

            <div className="ui breadcrumb">
                <NavLink to="/">
                    <a style={{ color: "white" }} className="">
                        Home
                    </a>
                </NavLink>
                <div className="divider"> / </div>
                <div style={{ color: "#6435c9" }} className="active section">
                    Cadastro
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
                                Crie sua conta, preenchendo os campos abaixo !
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
                                          ref={register({
                                              required:
                                                    "Escolha um apelido legal para voce ser conhecido mais facilmente",
                                              maxLength: {
                                                value: 20,
                                                message:
                                                        "Tamanho maximo é 20"
                                              },
                                              minLength: {
                                                value: 2,
                                                message:
                                                        "Tamanho minimo é 2, voce consegue"
                                              },
                                              pattern: {
                                                value: /^[A-Za-z0-9]+$/i,
                                                message:
                                                        "Deixa espaço em branco não cara, ajuda ai :)"
                                              }
                                            })}
                                          placeholder="Digite seu apelido"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon" />
                                        <input
                                          type="email"
                                          name="email"
                                          id="email"
                                          ref={register({
                                              required:
                                                    "É necessario o email, pode ser util no futuro",
                                              pattern: {
                                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                message:
                                                        "Acho que seu email nao esta correto, tente novamente"
                                              },
                                              maxlength: {
                                                value: 30,
                                                message:
                                                        "Que email é esse, escolha um menor"
                                              }
                                            })}
                                          placeholder="Digite seu email"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon" />
                                        <input
                                          type="password"
                                          name="senha"
                                          maxLength="15"
                                          id="senha"
                                          ref={register({
                                              required:
                                                    "Sem senha, voce nao consegue se logar",
                                              maxlength: {
                                                value: 15,
                                                message:
                                                        "Tamanho maximo para a senha 15 digitos"
                                              }
                                            })}
                                          placeholder="Digite sua senha"
                                        />
                                    </div>
                                </div>
                                <button
                                  style={{ backgroundColor: "#6435c9" }}
                                  disabled={
                                        errors.apelido
                                        || errors.email
                                        || errors.senha
                                    }
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
                                                {errors.apelido.message}
                                            </small>
                                        )}
                                    </li>
                                    <li>
                                        {errors.email && (
                                            <small>
                                                {errors.email.message}
                                            </small>
                                        )}
                                    </li>
                                    <li>
                                        {errors.senha && (
                                            <small>
                                                {errors.senha.message}
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
                            <NavLink to="/login">
                                <a className="pink-text">
                                    <b>Ja tem uma conta? Acesse aqui</b>
                                </a>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
