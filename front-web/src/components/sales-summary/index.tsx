import './styles.css';
import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as DoneIcon } from '../../assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/sync-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/images/bar-chart-icon.svg';
import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';

function SalesSummaryComponent() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={534} label={'Média'} icon={<DoneIcon />} />
      <SalesSummaryCard value={44434} label={'Quantidade'} icon={<SyncIcon />} />
      <SalesSummaryCard value={434} label={'Mínima'} icon={<BarChartIcon />} />
      <SalesSummaryCard value={3434} label={'Máxima'} icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummaryComponent;
