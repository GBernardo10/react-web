// @flow
import { Form } from '@unform/web';
import { Input } from '../form/input';
import { FormStyle } from '../styles/signup';
import { useRef } from 'react';
import { User } from '../types/user';
import * as Yup from 'yup';

export default () => {
  const formRef = useRef(null);

  const handleSubmit = async (user: User, { reset }) => {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Digite um nome de usuario'),
        password: Yup.string().required('Digite uma senha de usuario'),
        mail: Yup.string()
          .email('Digite um email valido')
          .required('Digite um email'),
      });

      await schema.validate(user, {
        abortEarly: false,
      });

      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach((error) => {
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
