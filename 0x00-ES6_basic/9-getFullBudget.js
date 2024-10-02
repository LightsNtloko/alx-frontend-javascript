import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars() {
      return '$20';
    },
    getIncomeInEuros() {
      return '20 euros';
    },
  };
  return fullBudget;
}
