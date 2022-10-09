import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDateComponent from './components/sales-by-date';
import SalesSummaryComponent from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDateComponent />
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
      </div>
    </>
  );
}

export default App;
