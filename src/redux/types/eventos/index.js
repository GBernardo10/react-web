// @flow

export type Evento = {
  id: string,
  name: string,
};

export type EventosState = {
  data: Evento[],
  loading: boolean,
  error: boolean,
};
