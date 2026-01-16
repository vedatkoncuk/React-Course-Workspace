import { useState } from 'react'
import React from 'react';

function useCounter() {
  const [counter, setCount] = useState(2);

  const increase = () => {
    setCount(counter + 1);
  }

  const decrease = () => {
    setCount(counter - 1);
  }

  return {
    counter, decrease, increase
  }
}

export default useCounter