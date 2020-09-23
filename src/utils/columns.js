import { toMoney } from './string';

export const renderMoney = (field) => (rowData) => toMoney(parseFloat(rowData[field]));

export const renderPercentage = (field) => (rowData) => `${rowData[field]}%`;

export const renderWithdrawTime = (field) => (rowData) => `D+${rowData[field]}`;
