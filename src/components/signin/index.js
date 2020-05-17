// @flow
import { Form } from '@unform/web';
import { Input } from '../form/input';
import { connect } from 'react-redux';
import { loginUserAction } from '../../redux/actions/authenticationActions';
import { useRouter } from 'next/router';

type Props = {
  dispatch: Function,
};

const SignIn = ({ dispatch }: Props) => {
  const router = useRouter();
  const handleSubmit = data => {
    const res = dispatch(loginUserAction(data));
    setTimeout(() => {
      if (res.status !== 200) {
        alert('nao autorizado');
        return;
      }
      router.push('/');
    }, 1000);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="username" />
      <Input autoComplete="on" type="password" name="password" />

      <button type="submit">Logar</button>
    </Form>
  );
};

const mapStateToProps = response => ({ response });
export default connect(mapStateToProps)(SignIn);
