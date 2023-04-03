import { useEffect } from 'react';

const useScrollToRef = (ref, hashUrl) => {
  useEffect(() => {
    if (ref.current.id === hashUrl) {
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [hashUrl]);

  return null;
}

export default useScrollToRef;
