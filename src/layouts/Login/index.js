/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { NavLink, Redirect,Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox, GridRow } from 'semantic-ui-react';
import useForm from "react-hook-form";
import { api } from "../../services";
import { login } from "../../services/auth";

export default () => {
    const { register, handleSubmit, errors } = useForm();
    const [toPerfil, setToPerfil] = useState(false);
    const [error, setError] = useState("");
    const onSubmit = async (data) => {
        await api.post("auth", data)
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
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            {toPerfil ? (
                    <Redirect
                        to={`/perfil/${localStorage.getItem("apelido")}`}
                    />
                ) : null}
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='purple' textAlign='center'>
                    Bem vindo, acesse sua conta.
                </Header>
                <Form size='large' onSubmit={handleSubmit(onSubmit)}>
                    <Segment stacked>
                        <Form.Input required fluid icon='user' iconPosition='left' placeholder='Informe seu apelido ou email'
                            name="apelido"
                            id="apelido"
                            ref={register({ required: true })} />
                        {errors.apelido && (<small>Esqueceram de mim, fala ai seu apelido</small>)}

                        <Form.Input required fluid icon='lock' iconPosition='left'
                            placeholder='Informe sua senha'
                            type='password'
                            name="senha"
                            id="senha"
                            ref={register({ required: true })} />
                        {errors.senha && (<small>Acho que esta faltando a senha</small>)}
                        <Form.Field >
                            <Checkbox textAlign='center' label='Lembrar de mim' />
                        </Form.Field>
                        <Button color="purple"
                            disabled={
                                errors.apelido || errors.senha
                            }
                            type="submit"
                            name="btn_login" 
                            fluid size='large'>
                            Acessar
                        </Button>
                    </Segment>
                </Form>
                <Message color="black">
                    <Link to="/cadastro">Não tem conta? Crie agora é gratis! </Link> <br />
                    <Link >Esqueceu a senha</Link>
                </Message>
            </Grid.Column>
        </Grid>

        // <Container>
        //     <div className="container">
        //         {toPerfil ? (
        //             <Redirect
        //                 to={`/perfil/${localStorage.getItem("apelido")}`}
        //             />
        //         ) : null}
        //         <Card>
        //             <h4 className="center-align">
        //                 Bem vindo, acesse sua conta
        //             </h4>
        //             <div className="row">
        //                 <div className="col s12">
        //                     <form onSubmit={handleSubmit(onSubmit)}>
        //                         <div className="row" />
        //                         <div className="row">
        //                             <div className="input-field col s12">
        //                                 <i className="material-icons prefix">
        //                                     account_circle
        //                                 </i>
        //                                 <input
        //                                     className="validate"
        //                                     type="text"
        //                                     name="apelido"
        //                                     id="apelido"
        //                                     ref={register({ required: true })}
        //                                 />
        //                                 <label htmlFor="apelido">
        //                                     Digite seu apelido
        //                                 </label>
        //                                 {errors.apelido && (
        //                                     <small>
        //                                         Esqueceram de mim, fala ai seu
        //                                         apelido
        //                                     </small>
        //                                 )}
        //                             </div>
        //                         </div>
        //                         <div className="row">
        //                             <div className="input-field col s12">
        //                                 <i className="material-icons prefix">
        //                                     lock
        //                                 </i>
        //                                 <input
        //                                     className="validate"
        //                                     type="password"
        //                                     name="senha"
        //                                     id="senha"
        //                                     ref={register({ required: true })}
        //                                 />
        //                                 <label htmlFor="senha">
        //                                     Digite sua senha
        //                                 </label>
        //                                 {errors.senha && (
        //                                     <small>
        //                                         Acho que esta faltando a senha
        //                                     </small>
        //                                 )}
        //                             </div>
        //                         </div>
        //                         <div className="row">
        //                             <div className="input-field col s12 m12 l12  login-text">
        //                                 <input
        //                                     type="checkbox"
        //                                     id="remember-me"
        //                                 />
        //                                 <label htmlFor="remember-me">
        //                                     Lembrar de mim
        //                                 </label>
        //                             </div>
        //                         </div>
        //                         <div className="row">
        //                             <div className="input-field col s12">
        //                                 <button
        //                                     disabled={
        //                                         errors.apelido || errors.senha
        //                                     }
        //                                     type="submit"
        //                                     name="btn_login"
        //                                     className="col s12 btn btn-large waves-effect indigo"
        //                                 >
        //                                     Acessar
        //                                 </button>
        //                             </div>
        //                             <div className="row">
        //                                 <div className="input-field col s6 m6 l6">
        //                                     {error && (
        //                                         <p className="margin medium-small">
        //                                             {error}
        //                                         </p>
        //                                     )}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="row">
        //                             <div className="input-field col s6 m6 l6">
        //                                 <p className="margin medium-small">
        //                                     <NavLink to="/cadastro">
        //                                         Não tem conta? Crie agora é
        //                                         gratis!
        //                                     </NavLink>
        //                                 </p>
        //                             </div>
        //                             <div className="input-field col s6 m6 l6">
        //                                 <p className="margin right-align medium-small">
        //                                     <a href="#">Esqueceu a senha?</a>
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </Card>
        //     </div>
        // </Container>
    );
};
