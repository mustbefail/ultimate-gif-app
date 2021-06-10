import { useState } from 'react';

export default function useSearchForm() {
  const [query, setInputs] = useState('');

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
  };

  const handleInput = (event) => {
    setInputs(event.target.value);
  };

  return {
    handleInput,
    handleSubmit,
    query,
  };
}
