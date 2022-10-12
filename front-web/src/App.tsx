import { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDateComponent from './components/sales-by-date';
import SalesList from './components/sales-list';
import SalesSummaryComponent from './components/sales-summary';
import { FilterData } from './types/filter-data';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDateComponent filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummaryComponent />
          <PieChartCard
            name={'Lojas'}
            labels={['Uberlândia', 'Araguari', 'Uberaba']}
            series={[30, 40, 30]}
          />
          <PieChartCard
            name={'Pagamento'}
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[50, 30, 20]}
          />
        </div>
        <SalesList />
      </div>
    </>
  );
}

export default App;
