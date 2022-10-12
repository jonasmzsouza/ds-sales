import { SalesByPaymentMethod } from './types/sales-by-payment-method';
import { SalesByStore } from './types/sales-by-store';

export const buildSalesByStoreChart = (sales: SalesByStore[]) => {
  const labels = sales.map((sale) => sale.storeName);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};

export const buildSalesByPaymentMethod = (sales: SalesByPaymentMethod[]) => {
  const labels = sales.map((sale) => sale.description);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
