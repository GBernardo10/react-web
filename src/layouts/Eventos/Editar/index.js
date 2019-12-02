/* eslint-disable import/order */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useRouteMatch } from "react-router-dom";
import useForm from "react-hook-form";
import bg from "../../../assets/flat-geometric-shapes-background/bg-detalheEventos.png";
import imgUser from "../../../assets/flat-geometric-shapes-background/user.png";
import { api } from "../../../services";
import "../../../styles/perfil/perfil.css";
import {
  Container,
  Select,
  Card,
  DatePicker,
  TimePicker
} from "react-materialize";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [valido, setValido] = useState(false);
  return (
        <Container>
            <div className="container">
                <Card>
                    <h4 className="center-align">
                        Editar informações do evento
                    </h4>

                    <div className="row">
                        <div className="col s12">
                            <form>
                                <div className="row" />
                                <div className="row">
                                    <div className="input-field col s6">
                                        {/* <i className="material-icons prefix">
                                            account_circle
                                        </i> */}
                                        <input
                                          className="validate"
                                          type="text"
                                          name="titulo"
                                          id="titulo"
                                          ref={register({
                                            required:
                                                    "Seu evento, deve ter um nome legal :)",
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
                                        <label htmlFor="titulo">
                                            Titulo do evento
                                        </label>
                                        {errors.titulo && (
                                            <small>
                                                {errors.titulo.message}
                                            </small>
                                        )}
                                    </div>
                                    <div className="input-field col s6">
                                        {/* <i className="material-icons prefix">
                                            lock
                                        </i> */}
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
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">
                                            mode_edit
                                        </i>
                                        <textarea
                                          className="materialize-textarea"
                                            //   data-length="120"
                                          type="text"
                                          name="descricao"
                                          id="descricao"
                                          ref={register({
                                            maxlength: {
                                              value: 120,
                                              message:
                                                        "Sei que muita informaçao pode ser bom, mas manera ai :)"
                                            }
                                          })}
                                        />
                                        <label htmlFor="descricao">
                                            Descricao do evento
                                        </label>
                                        {errors.descricao && (
                                            <small>
                                                {errors.descricao.message}
                                            </small>
                                        )}
                                    </div>
                                    <div className="row" />
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>File</span>
                                            <input type="file" />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input
                                              className="file-path validate"
                                              type="text"
                                              placeholder="Escolha uma foto, pra ser o banner da pagina do seu evento"
                                            />
                                        </div>
                                    </div>
                                    <div className="input-field col s6">
                                        <DatePicker name="data" id="data" />
                                        <label htmlFor="data">
                                            Clique aqui para abrir o calendario!
                                        </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <TimePicker name="hora" id="hora" />
                                        <label htmlFor="hora">
                                            Clique aqui marcar o horario do
                                            evento !
                                        </label>
                                    </div>

                                    <select
                                      id="categoria"
                                      name="categoria"
                                      className="browser-default"
                                    >
                                        <i className="material-icons prefix">
                                            category
                                        </i>
                                        <option value="" disabled selected>
                                            Defina uma categoria para o evento
                                        </option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label htmlFor="categoria">Categoria</label>
                                </div>
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
