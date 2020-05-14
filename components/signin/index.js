import { Form } from '@unform/web';
import { Input } from '../form/input';

export default () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="username" />
      <Input autoComplete="on" type="password" name="password" />

      <button type="submit">Logar</button>
    </Form>
  );
};
