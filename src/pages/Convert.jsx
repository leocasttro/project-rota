import { useState } from 'react';
import './convert.css';

function Convert() {
  const [decimal, setDecimal] = useState('');
  const [roman, setRoman] = useState('');
  const [isRomanToDecimal, setIsRomanToDecimal] = useState(true);

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

  const convertToDecimal = (num) => {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = num.length - 1; i >= 0; i--) {
      const currentValue = romanNumerals[num[i]];
      if (currentValue >= prevValue) {
        result += currentValue;
      } else {
        result -= currentValue;
      }
      prevValue = currentValue;
    }

    return result;
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const uppercaseValue = value.toUpperCase();
    setDecimal(uppercaseValue);
    if (isRomanToDecimal) {
      const decimalValue = convertToDecimal(uppercaseValue);
      setRoman(decimalValue.toString());
    } else {
      const romanNumeral = convertToRoman(uppercaseValue);
      setRoman(romanNumeral);
    }
  };

  const handleToggleConversion = () => {
    setIsRomanToDecimal(!isRomanToDecimal);
    setDecimal('');
    setRoman('');
  };

  return (
    <div className="containerConvert">
      <div className="cardConvert">
        <h1>Conversor</h1>
        <span>{isRomanToDecimal ? 'Número romano' : 'Número decimal'}</span>
        <input className="num" type="text" value={decimal} onChange={handleInputChange} />
        <span>{isRomanToDecimal ? 'Número decimal' : 'Número romano'}</span>
        <input className="roman" type="text" value={roman} readOnly />
        <button onClick={handleToggleConversion}>Alternar</button>
      </div>
    </div>
  );
}

export default Convert;
