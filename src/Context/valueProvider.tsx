import { useState, createContext, ReactNode } from "react";

export const DataContext = createContext({});

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState("amifjwo");

  const DataInfo = {
    category,
    setCategory,
  };

  return (
    <DataContext.Provider value={DataInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
