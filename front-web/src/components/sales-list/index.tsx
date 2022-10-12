import './styles.css';

function SalesList() {
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
            <tr>
              <td>#341</td>
              <td>07/11/1994</td>
              <td>Femino</td>
              <td>Roupas e Acessorios</td>
              <td>Uberlândia</td>
              <td>Crédito</td>
              <td>R$ 540.000,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesList;
