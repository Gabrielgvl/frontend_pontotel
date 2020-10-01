import { useAxios } from '../hooks';
import { GET, link } from './util';

const URL = `${link}/quotation`;
export const BOVESPA_TYPE = 'Bovespa';
export const QUOTATION_TYPE = 'Cotação';

export const useGetBovespa = () => useAxios({ url: `${URL}/bovespa`, entity: BOVESPA_TYPE, method: GET });
export const useGetQuotationByCompany = (companySymbol) => useAxios({
  url: `${URL}/${companySymbol}`, entity: QUOTATION_TYPE, method: GET, manual: true,
});
