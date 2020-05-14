
import {useEffect, useRef} from 'react';
import {useField} from '@unform/core';

export const Input = ({name}) => {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue, error} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input ref={inputRef} />
    </>
  );
};
Input.prototype;
