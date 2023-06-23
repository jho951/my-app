import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { MOBILE_SIZE } from '../../styles/GlobalStyled';

export const LayoutContext = React.createContext({
  matchese: typeof window === 'object' ? window.matchMedia(`(max-width:${MOBILE_SIZE})`).matches : null,
});

const LayoutContextProvider = ({ children }) => {
  const [matchese, setMatches] = useState(false);

  const resizePage = useCallback(() => {
    if (typeof window !== 'undefined') {
      setMatches(window.matchMedia(`(max-width:${MOBILE_SIZE})`).matches);
    }
  }, []);

  useEffect(() => {
    resizePage();
  }, [resizePage]);

  useEffect(() => {
    window.addEventListener('resize', resizePage);
    return () => window.removeEventListener('resize', resizePage);
  }, [resizePage]);

  const contextValue = useMemo(() => ({ matchese }), [matchese]);

  return <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>;
};

export default LayoutContextProvider;
