import React, { useState } from 'react'

function useToggle() {

  const [open, setOpen] = useState(false);

  const change = () => {
    setOpen(prev => !prev);
  }

  return {
    open, change,
  }
}

export default useToggle