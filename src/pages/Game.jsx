import { useEffect, useState } from 'react';
import './game.css'

function Game() {
  const [board, setBoard] = useState([]);

  // Função para inicializar o tabuleiro com células vivas aleatórias
  const initializeBoard = () => {
    // Defina o tamanho do tabuleiro (por exemplo, 10x10)
    const size = 10;
    
    // Crie uma matriz vazia para representar o tabuleiro
    const newBoard = Array(size).fill().map(() => Array(size).fill(false));

    // Defina células aleatórias como vivas
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        newBoard[i][j] = Math.random() < 0.5; // 50% de chance de estar viva
      }
    }

    // Atualize o estado do tabuleiro
    setBoard(newBoard);
  };

  // Função para atualizar o tabuleiro a cada geração
  const updateBoard = () => {
    // Implemente as regras do "Game of Life" para atualizar o estado das células

    // ...

    // Atualize o estado do tabuleiro com as células atualizadas
    setBoard(/* novo estado do tabuleiro */);
  };

  // Use o hook useEffect para executar a função updateBoard a cada intervalo de tempo
  useEffect(() => {
    const interval = setInterval(updateBoard, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  // Renderize o tabuleiro na interface
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={`cell ${cell ? 'alive' : 'dead'}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Game;