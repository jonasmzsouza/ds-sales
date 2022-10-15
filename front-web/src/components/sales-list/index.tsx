import { useEffect, useMemo, useState } from 'react';
import { FilterData } from '../../types/filter-data';
import { Sale } from '../../types/sale';
import { SaleResponse } from '../../types/sales-response';
import { formatDate, formatGender, formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/requests';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

const extraParans = {
  page: 0,
  size: 12,
  sort: 'date,desc'
};

function SalesList({ filterData }: Props) {
  const [sales, setSales] = useState<Sale[]>([]);
  const params = useMemo(() => buildFilterParams(filterData, extraParans), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SaleResponse>('/sales', { params })
      .then((response) => {
        setSales(response.data.content);
      })
      .catch(() => {
        console.error('Error to fetch sales');
      });
  }, [params]);

  return (
    <div className="sales-list-container base-card">
      <h3 className="sales-list-title">Sales list</h3>
      <div>
        <table className="sales-list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Gênero</th>
              <th>Categoria</th>
              <th>Loja</th>
              <th>Forma de Pagamento</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td>#{sale.id}</td>
                <td>{formatDate(sale.date)}</td>
                <td>{formatGender(sale.gender)}</td>
                <td>{sale.categoryName}</td>
                <td>{sale.storeName}</td>
                <td>{sale.paymentMethod}</td>
                <td>{formatPrice(sale.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesList;
