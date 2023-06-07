import React from 'react';
import './divider.css';

function Divider() {
  // ...seu código existente...

  return (
    <div className="divider-container">
      <div className="column">
        <h2>Divisor de Conta de Restaurante</h2>
        <div>
          <button onClick={adicionarProduto}>Adicionar Produto</button>
          <br />
          <br />
          {produtos.map((produto, index) => (
            <div key={index}>
              <input
                type="text"
                value={produto.nome}
                onChange={(e) => atualizarProduto(index, 'nome', e.target.value)}
                placeholder="Digite o nome do produto"
              />
              <br />
              <input
                type="number"
                value={produto.valor}
                onChange={(e) => atualizarProduto(index, 'valor', parseFloat(e.target.value))}
                placeholder="Digite o valor do produto"
              />
              <br />
              <br />
            </div>
          ))}
        </div>
        <br />
        <div>
          <button onClick={adicionarCliente}>Adicionar Cliente</button>
          <br />
          <br />
          {clientes.map((cliente, index) => (
            <div key={index}>
              <input
                type="text"
                value={cliente}
                onChange={(e) => atualizarCliente(index, e.target.value)}
                placeholder="Digite o nome do cliente"
              />
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>

      <div className="column">
        {produtos.map((produto, index) => (
          <div key={index}>
            {clientes.map((cliente, clienteIndex) => (
              <label key={clienteIndex}>
                {cliente}
                <input
                  type="checkbox"
                  checked={produto.consumidores.includes(cliente)}
                  onChange={() => adicionarConsumidor(index, clienteIndex)}
                />
              </label>
            ))}
            <br />
            <br />
          </div>
        ))}
      </div>

      {/* Resto do seu código... */}
    </div>
  );
}

export default Divider;
