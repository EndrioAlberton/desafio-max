'use client';

import { useState } from 'react';

export default function Calculadora() {

  // Definindo os estados para os números e resultados
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultados, setResultados] = useState<null | {
    soma: number;
    subtracao: number;
    multiplicacao: number;
    divisao: string;
  }>(null);

  const calcular = () => {
    const n1 = parseInt(numero1);
    const n2 = parseInt(numero2);


    //Validações
    if (numero1.includes(",") || numero1.includes(".") || numero2.includes(",") || numero2.includes(".")) {
      alert("Por favor, insira apenas números inteiros.");
      return;
    }
    if (isNaN(n1) || isNaN(n2)) {
      alert('Por favor, insira apenas números válidos.');
      return;
    }

    // Definindo os resultados
    setResultados({
      soma: n1 + n2,
      subtracao: n1 - n2,
      multiplicacao: n1 * n2,
      divisao: n2 !== 0 ? (n1 / n2).toFixed(2) : 'Divisão por zero', //toFixed(2) para limitar a 2 casas decimais (transformando para string)
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#f5f5f5] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Calculadora</h1>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Digite o primeiro número"
          className="w-full p-2 border border-gray-300 rounded"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Digite o segundo número"
          className="w-full p-2 border border-gray-300 rounded"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
        <button
          onClick={calcular}
          className="w-full bg-[#4e342e] text-white py-2 rounded hover:bg-[#5d4037]"
        >
          Calcular
        </button>
      </div>

      {resultados && (
        <div className="mt-6 space-y-2 text-gray-800">
          <p><strong>Soma:</strong> {resultados.soma}</p>
          <p><strong>Subtração:</strong> {resultados.subtracao}</p>
          <p><strong>Multiplicação:</strong> {resultados.multiplicacao}</p>
          <p><strong>Divisão:</strong> {resultados.divisao}</p>
        </div>
      )}

    </div>
  );
}
