import './App.css';
import Filter from './components/filter';
import Header from './components/header';
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
        </div>
      </div>
    </>
  );
}

export default App;
