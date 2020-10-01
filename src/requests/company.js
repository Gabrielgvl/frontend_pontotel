import { useAxios } from '../hooks';
import { GET, link } from './util';

const URL = `${link}/company`;
export const COMPANY_TYPE = 'Companhia';

export const useListCompanies = () => useAxios({ url: URL, method: GET, entity: COMPANY_TYPE });
