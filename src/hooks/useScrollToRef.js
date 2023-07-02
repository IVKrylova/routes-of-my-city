import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const useScrollToRef = (ref) => {
  let location = useLocation();
  let hash = location.hash;

  const scrollToElement = () => {
    ref.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    if (ref.current && ref.current.id === hash) setTimeout(scrollToElement, 100);
  }, [hash, location]);

  return null;
}

export default useScrollToRef;
