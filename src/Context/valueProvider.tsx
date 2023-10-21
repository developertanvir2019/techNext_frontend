import { useState, createContext, ReactNode } from "react";

export const DataContext = createContext({});

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const DataInfo = {
    pageNumber,
    setPageNumber,
  };

  return (
    <DataContext.Provider value={DataInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
