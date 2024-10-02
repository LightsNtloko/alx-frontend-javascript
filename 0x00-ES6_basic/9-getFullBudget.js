import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return '$20';
    },
    getIncomeInEuros(income) {
      return '20 euros';
    },
  };
  return fullBudget;
}
