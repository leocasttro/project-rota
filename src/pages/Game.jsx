import { useEffect, useState } from 'react';
import './game.css';

function Game() {
  const [board, setBoard] = useState([]);

  const initializeBoard = () => {
    const size = 20;
    const newBoard = Array(size)
      .fill()
      .map(() =>
        Array(size).fill().map(() => Math.random() < 0.5) //incia com 50% vivo 
      );
    setBoard(newBoard);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateBoard = () => {
    setBoard(prevBoard => {
      const newBoard = prevBoard.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          const count = countAliveNeighbors(rowIndex, cellIndex);
          if (cell && (count < 2 || count > 3)) {
            return false; // Celula viva morre
          } else if (!cell && count === 3) {
            return true; // Celula morta se torna viva
          } else {
            return cell; // Mantém o estado atual da célula
          }
        })
      );
      return newBoard;
    });
  };
  

  const countAliveNeighbors = (rowIndex, cellIndex) => {
    const neighborsOffsets = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];
  
    return neighborsOffsets.reduce((count, [offsetX, offsetY]) => {
      const neighborRow = rowIndex + offsetX;
      const neighborCell = cellIndex + offsetY;
  
      
      if (
        neighborRow >= 0 &&
        neighborRow < board.length &&
        neighborCell >= 0 &&
        neighborCell < board[neighborRow].length &&
        board[neighborRow][neighborCell]
      ) {
        count++;
      }
  
      return count;
    }, 0);
  };  

  useEffect(() => {
    initializeBoard();
  }, []);

  useEffect(() => {
    const interval = setInterval(updateBoard, 1000); //tempo para alteração de gerações

    return () => clearInterval(interval);
  }, [updateBoard]);

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            className={`cell ${cell ? 'alive' : 'dead'}`}
          />
        ))}
      </div>
    ));
  };

  return <div className="board">{renderBoard()}</div>;
}

export default Game;
