// @flow
import { Form } from '@unform/web';
import { Input } from '../form/input';
import { FormStyle } from '../styles/signup';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { User } from '../../redux/types/user';
// import { registerUserAction } from '../../redux/actions/authenticationActions';

import * as Yup from 'yup';

type Props = {
  dispatch: Function,
};

const SignUp = ({ dispatch }: Props) => {
  const formRef = useRef(null);
  const router = useRouter();

  const handleSubmit = async (user: User, { reset }) => {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Digite um nome de usuario'),
        password: Yup.string().required('Digite uma senha de usuario'),
        phone: Yup.string().required('Digite um numero de celular'),
        mail: Yup.string()
          .email('Digite um email valido')
          .required('Digite um email'),
      });

      await schema.validate(user, {
        abortEarly: false,
      });

      // const res = dispatch(registerUserAction(user));
      // setTimeout(() => {
      //   if (res.status !== 201) {
      //     alert('usuario nao cadastrado');
      //     return;
      //   }
      //   formRef.current.setErrors({});
      //   reset();

      //   router.push('/');
      // }, 1000);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
      }
    }
  };

  return (
    <div className="container">
      <FormStyle>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <Input id="name" name="name" />

          <label htmlFor="mail">Email:</label>
          <Input id="mail" name="mail" />

          <label htmlFor="phone">Celular:</label>
          <Input id="phone" name="phone" />

          <label htmlFor="username">Apelido:</label>
          <Input id="username" name="username" />

          <label htmlFor="password">Senha:</label>
          <Input
            id="password"
            autoComplete="on"
            type="password"
            name="password"
          />

          <button type="submit">Cadastrar</button>
        </Form>
      </FormStyle>
    </div>
  );
};

const mapStateToProps = response => ({ response });
export default connect(mapStateToProps)(SignUp);
