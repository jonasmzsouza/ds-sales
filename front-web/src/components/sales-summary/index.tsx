import './styles.css';
import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as DoneIcon } from '../../assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/sync-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/images/bar-chart-icon.svg';
import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';
import { FilterData } from '../../types/filter-data';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/requests';
import { SalesSummary } from '../../types/sales-summary';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

function SalesSummaryComponent({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummary>(initialSummary);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummary>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg?.toFixed(2)} label={'Média'} icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label={'Quantidade'} icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label={'Mínima'} icon={<BarChartIcon />} />
      <SalesSummaryCard value={summary?.max} label={'Máxima'} icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummaryComponent;
