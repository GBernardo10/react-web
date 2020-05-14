// @flow

import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

type Props = {
  name: string,
};

export const Input = ({ name, ...rest }: Props) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input ref={inputRef} {...rest} />
      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </div>
  );
};
