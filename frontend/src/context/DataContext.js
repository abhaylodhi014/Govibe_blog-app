// context/DataContext.js
import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null); // Store data in state (it can be an array or an object depending on your use case)

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext); // Custom hook to use context data
};
