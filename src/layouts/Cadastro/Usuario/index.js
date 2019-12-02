/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import useForm from "react-hook-form";
import { Card, Container } from "react-materialize";
import { NavLink, Redirect } from "react-router-dom";
import { api } from "../../../services";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [valido, setValido] = useState(false);

  const onSubmit = (data) => {
    api.post("usuarios", data).then((respo) => {
      if (respo.status === 201) {
        setValido(true);
      }
    });
  };
  return (
        <Container>
            <div className="container">
                {valido ? <Redirect to="/" /> : null}
                <Card>
                    <h4 className="center-align">Bem vindo, crie uma conta</h4>
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
                                              }
                                            })}
                                        />
                                        <label htmlFor="apelido">
                                            Digite seu apelido
                                        </label>
                                        {errors.apelido && (
                                            <small>
                                                {errors.apelido.message}
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">
                                            email
                                        </i>
                                        <input
                                          className="validate"
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
                                        />
                                        <label htmlFor="email">
                                            Digite seu email
                                        </label>
                                        {errors.email && (
                                            <small>
                                                {errors.email.message}
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
                                        />
                                        <label htmlFor="senha">
                                            Digite sua senha
                                        </label>
                                        {errors.senha && (
                                            <small>
                                                {errors.senha.message}
                                            </small>
                                        )}
                                    </div>
                                    <label>
                                        <a className="pink-text" href="#!">
                                            <b>
                                                Ja tem uma conta?
                                                <NavLink to="/login">
                                                    Acesse aqui
                                                </NavLink>
                                            </b>
                                        </a>
                                    </label>
                                </div>

                                <br />
                                <center>
                                    <div className="row">
                                        <button
                                          disabled={
                                                errors.apelido
                                                || errors.email
                                                || errors.senha
                                            }
                                          type="submit"
                                          name="btn_login"
                                          className="col s12 btn btn-large waves-effect indigo"
                                        >
                                            Acessar
                                        </button>
                                    </div>
                                </center>
                            </form>
                        </div>
                    </div>
                </Card>
                {/* <Modal header="Modal Header" trigger={valido}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                </p>
            </Modal> */}
            </div>
        </Container>
  );
};
