import { useState } from 'react';

import './divider.css'

function Divider() {
  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [taxaServico, setTaxaServico] = useState([]);
  const [resultado, setResultado] = useState([]);

  const adicionarProduto = () => {
    setProdutos([...produtos, { nome: '', valor: 0, consumidores: [] }]);
  };

  const adicionarCliente = () => {
    setClientes([...clientes, '']);
    setTaxaServico([...taxaServico, false]);
  };

  const removerProduto = (index) => {
    const novosProdutos = [...produtos];
    novosProdutos.splice(index, 1);
    setProdutos(novosProdutos);
  };

  const removerCliente = (index) => {
    const novosClientes = [...clientes];
    novosClientes.splice(index, 1);
    setClientes(novosClientes);

    const novaTaxaServico = [...taxaServico];
    novaTaxaServico.splice(index, 1);
    setTaxaServico(novaTaxaServico);
  };

  const atualizarProduto = (index, campo, valor) => {
    const novosProdutos = [...produtos];
    novosProdutos[index][campo] = valor;
    setProdutos(novosProdutos);
  };

  const atualizarCliente = (index, valor) => {
    const novosClientes = [...clientes];
    novosClientes[index] = valor;
    setClientes(novosClientes);
  };

  const atualizarTaxaServico = (index, valor) => {
    const novaTaxaServico = [...taxaServico];
    novaTaxaServico[index] = valor;
    setTaxaServico(novaTaxaServico);
  };

  const calcularDivisao = () => {
    const valorTotal = produtos.reduce((acc, cur) => acc + cur.valor, 0);
    const numClientesComTaxa = clientes.reduce((acc, _, index) => acc + (taxaServico[index] ? 1 : 0), 0);
    const valorComTaxa = valorTotal + (valorTotal * numClientesComTaxa * 10) / 100;

    console.log(valorComTaxa)

    const resultados = clientes.map((cliente, index) => {
      let valorIndividual = 0;

      produtos.forEach((produto) => {
        if (produto.consumidores && produto.consumidores.includes(cliente)) {
          valorIndividual += produto.valor / produto.consumidores.length;
        }
      });
  
      //const taxaServicoCliente = taxaServico[index] ? (valorIndividual * 10) / 100 : 0;
      const valorTotalCliente = valorIndividual + (valorIndividual * (taxaServico[index] ? 10 : 0)) / 100;

      const valorDividido = (valorTotalCliente / numClientesComTaxa).toFixed(2);
      

      return {
        cliente,
        valor: valorDividido,
      };
    });

    setResultado(resultados);
  };

  const adicionarConsumidor = (indexProduto, indexCliente) => {
    const novosProdutos = [...produtos];
    novosProdutos[indexProduto].consumidores.push(clientes[indexCliente]);
    setProdutos(novosProdutos);
  };

  return (
    <div className="divider-container">
      <h2>Divisor de Conta de Restaurante</h2>
      <button onClick={adicionarProduto}>Adicionar Produto</button>
      <button onClick={adicionarCliente}>Adicionar Cliente</button>
      <br />
      <div className='input-container'>
        {produtos.map((produto, index) => (
          <div key={index} className='input-container'>
            <input
              type="text"
              value={produto.nome}
              onChange={(e) => atualizarProduto(index, 'nome', e.target.value)}
              placeholder="Digite o nome do produto"
            />
            <input
              type="number"
              value={produto.valor}
              onChange={(e) => atualizarProduto(index, 'valor', parseFloat(e.target.value))}
              placeholder="Digite o valor do produto"
            />
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
            <button onClick={() => removerProduto(index)}>Remover</button>
          </div>
        ))}
      </div>
      <br />
      <div className='input-container'>
        {clientes.map((cliente, index) => (
          <div key={index} className='input-container'>
            <input
              type="text"
              value={cliente}
              onChange={(e) => atualizarCliente(index, e.target.value)}
              placeholder="Digite o nome do cliente"
            />
            <label>
              Paga a taxa de serviço (%):
              <input
                type="checkbox"
                checked={taxaServico[index]}
                onChange={(e) => atualizarTaxaServico(index, e.target.checked)}
              />
            </label>
            <button onClick={() => removerCliente(index)}>Remover</button>
          </div>
        ))}
      </div>
      <br />
      <button onClick={calcularDivisao}>Calcular Divisão</button>
      <br />
      <br />
      <h3>Resultado:</h3>
      <div>
        {resultado.map((item, index) => (
          <div className='result' key={index}>
            <span>{item.cliente}: </span><span>R$ {item.valor}</span> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Divider;
