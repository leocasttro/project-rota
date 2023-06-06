import { useState } from 'react';
import './convert.css';

function Convert() {
  const [decimal, setDecimal] = useState('');
  const [roman, setRoman] = useState('');

  const convertToRoman = (num) => {
    if (num > 0) {
      const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
      const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      let romanized = "";
  
      for (var i = 0; i < numbers.length; i++) {
        while (numbers[i] <= num) {
          romanized += numerals[i];
          num -= numbers[i];
        }
      }
      return romanized;
    }
    return ""; // Retorna uma string vazia se o número for menor ou igual a zero
  };
  

  const handleDecimalChange = (event) => {
    const value = event.target.value;
    setDecimal(value);
    const romanNumeral = convertToRoman(value);
    setRoman(romanNumeral);
  };

  return (
    <div className="containerConvert">
      <div className="cardConvert">
        <p>Número decimal</p>
        <input className="num" type="number" value={decimal} onChange={handleDecimalChange} />
        <p>Número romano</p>
        <input className="roman" type="text" value={roman} readOnly />
      </div>
    </div>
  );
}

export default Convert;
