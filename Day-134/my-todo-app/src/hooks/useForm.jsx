import { useState } from 'react';

const useForm = (initialState = '') => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialState);
  };

  return [value, handleChange, reset];
};

export default useForm;
