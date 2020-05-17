/* eslint-disable require-jsdoc */

import { useState, useEffect } from 'react';
function usePersisted(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      setState(JSON.parse(storageValue));
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
export default usePersisted;
