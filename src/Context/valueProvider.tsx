import { useState, createContext, ReactNode } from "react";

export const DataContext = createContext({});

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [launchStatusFilter, setLaunchStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const DataInfo = {
    pageNumber,
    setPageNumber,
    searchInput,
    setSearchInput,
    launchStatusFilter,
    setLaunchStatusFilter,
    dateFilter,
    setDateFilter,
  };

  return (
    <DataContext.Provider value={DataInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
