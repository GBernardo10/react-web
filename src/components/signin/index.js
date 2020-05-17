// @flow
import { Form } from '@unform/web';
import { Input } from '../form/input';
import { connect } from 'react-redux';
import { loginUserAction } from '../../redux/actions/authenticationActions';

type Props = {
  dispatch: Function,
};

const SignIn = ({ dispatch }: Props) => {
  const handleSubmit = data => {
    dispatch(loginUserAction(data));
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
