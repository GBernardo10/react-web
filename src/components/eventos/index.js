/* eslint-disable react-hooks/rules-of-hooks */
// @flow
import { bindActionCreators, Dispatch } from 'redux';
import React, { useEffect } from 'react';

import { connect, useStore } from 'react-redux';

import * as EventoActions from '../../redux/ducks/eventos/actions';

import { ApplicationState } from '../../redux/store';
import { Evento } from '../../redux/types/eventos';

type StateProps = {
  eventos: Evento[],
};

type DispatchProps = {
  loadEventoRequest(): void,
};

type Props = StateProps & DispatchProps;

const Eventos: Props = ({ loadEventoRequest, eventos }) => {
  // const store = useStore();
  // console.log(store.getState());
  useEffect(() => {
    loadEventoRequest();
  }, [loadEventoRequest]);

  return (
    <>
      {eventos.map(e => (
        <div key={e.id}>{e.name}</div>
      ))}
      <button>Adicionar</button>
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  eventos: state.eventos.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(EventoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Eventos);
