import { PropsWithChildren, useEffect, useState } from "react";
import { filterOptions } from "src/types";
import { AppContext } from "./appContext";
import { FILTER_OPTIONS, INITIAL_FILTER_VALUES } from "src/constants";


export const AppProvider = (props: PropsWithChildren) => {
  const [filters, setFilters_] = useState<filterOptions>(INITIAL_FILTER_VALUES);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const setFilters = (filters: filterOptions) => {
    setFilters_(filters);
  };

  useEffect(() => {
    const local = localStorage.getItem(FILTER_OPTIONS)
    if (local) {
      const filter: filterOptions = JSON.parse(local)
      setFilters_(filter)
    }
  }, [])

  return (
    <AppContext.Provider value={{ filters, setFilters, theme, setTheme }}>
      {props.children}
    </AppContext.Provider>
  );
};

