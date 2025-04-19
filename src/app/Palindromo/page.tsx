'use client';

import { useState } from 'react';

export default function Palindromo() {
  const [palavra, setPalavra] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const [palavraVerificada, setPalavraVerificada] = useState<string>('');

  const verificarPalindromo = (input: string): string => {
    // Remove espaços, pontuações e converte para minúsculas
    const palavraLimpa = input.replace(/[\s\W]/g, '').toLowerCase(); 
    const palavraInvertida = palavraLimpa.split('').reverse().join('');
    return palavraLimpa === palavraInvertida ? 'É um palíndromo' : 'Não é um palíndromo';
  };

  const handleVerificarClick = () => {
    // Valida se há conteúdo após remover espaços e pontuações
    const palavraLimpa = palavra.replace(/[\s\W]/g, ''); 
    if (!palavraLimpa) {
      alert('Por favor, digite uma palavra ou frase válida.');
      setResultado('');
      setPalavraVerificada('');
      return;
    }

    const novoResultado = verificarPalindromo(palavra);
    setPalavraVerificada(palavra); 
    setResultado(novoResultado); 
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#f5f5f5] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Verificador de Palíndromo</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Digite uma palavra ou frase"
          className="w-full p-2 border border-gray-300 rounded"
          value={palavra}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPalavra(e.target.value)}
        />
        <button
          onClick={handleVerificarClick}
          className="w-full bg-[#4e342e] text-white py-2 rounded hover:bg-[rgb(93,55,55)]"
        >
          Verificar
        </button>
      </div>
      {resultado && (
        <div className="mt-6 space-y-2 text-gray-800">
          <p>{`A ${palavraVerificada.includes(' ') ? 'frase' : 'palavra'} "${palavraVerificada}" ${resultado}`}</p>
        </div>
      )}
    </div>
  );
}