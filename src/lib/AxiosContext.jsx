import { createContext, useContext } from 'react';
import axiosInstance from './axiosInstance';

const AxiosContext = createContext();

// eslint-disable-next-line react/prop-types
export const AxiosProvider = ({ children }) => {
  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => {
  return useContext(AxiosContext);
};
