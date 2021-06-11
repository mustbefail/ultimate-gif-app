import { useState } from 'react';

export default function useSearchForm() {
  const [query, setInputs] = useState('');

  const handleInput = (event) => {
    setInputs(event.target.value);
  };

  return {
    handleInput,
    query,
  };
}
