import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useListCompanies } from '../requests/company';
import { useGetBovespa, useGetQuotationByCompany } from '../requests/quotation';

const GlobalContext = React.createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [{ data: companiesData, loading: companiesLoading }] = useListCompanies();
  const [currentCompany, setCurrentCompany] = useState({});
  const [{ data: bovespaData, loading: bovespaLoading }] = useGetBovespa();
  const [{ data: quotationData, loading: quotationLoading }, fetch] = useGetQuotationByCompany(currentCompany.symbol);

  useEffect(() => {
    if (currentCompany.symbol) {
      fetch();
    }
  }, [currentCompany]);

  useEffect(() => {
    if (companiesData && companiesData.companies) {
      setCurrentCompany(companiesData.companies[0]);
    }
  }, [companiesData]);

  const getQuotationPrice = () => {
    if (quotationData && quotationData[currentCompany.symbol]) {
      return Object.values(quotationData[currentCompany.symbol]).pop().adjusted || 0;
    }
  };

  const initialContext = {
    bovespaData: bovespaData || {},
    bovespaLoading,
    companiesData: companiesData || {},
    companiesLoading,
    quotationData: quotationData ? quotationData[currentCompany.symbol] : {},
    quotationLoading,
    quotationPrice: getQuotationPrice(),
    currentCompany,
    setCurrentCompany,
  };

  return (
    <GlobalContext.Provider value={initialContext}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
