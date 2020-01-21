import React, { useEffect } from 'react';

export const useClickOutside = (ref: any, callback: () => void) => {
  console.log(typeof callback);
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
