import React, { useContext, useState } from 'react';

const Context = React.createContext();

export const useContextHook = () => {
  return useContext(Context);
};

const ContextHook = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <Context.Provider value={{ movies, setMovies }}>
      {children}
    </Context.Provider>
  );
};

export default ContextHook;
