import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesByDateComponent from './components/sales-by-date';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDateComponent />
      </div>
    </>
  );
}

export default App;
