# Desafio Técnico

Este projeto foi desenvolvido como parte de um desafio técnico. Abaixo, você encontrará informações sobre a estrutura do projeto, decisões tomadas e como executar a aplicação. O projeto pode ser acessado em: [https://desafio-max.vercel.app/](https://desafio-max.vercel.app/),

## Tecnologias Utilizadas

- **Next.js**: Escolhido por ser um requisito da vaga e por meu interesse em aprofundar conhecimentos na tecnologia, considerando minha experiência prévia com React e TypeScript.
- **Tailwind CSS**: Utilizado para estilização, aproveitando a oportunidade para aprender esta ferramenta.
- **Axios**: Utilizado para realizar requisições HTTP.


## Estrutura do Projeto

A estrutura do projeto foi organizada com base na [documentação oficial do Next.js](https://nextjs.org/docs/app/getting-started/project-structure). Todos os exercícios foram mantidos dentro de um único projeto, permitindo a navegação entre eles.

## Commits e Decisões

### Commit 1: Configuração Inicial
- Configuração básica do projeto com Next.js e Tailwind CSS.
- Organização inicial dos arquivos e pastas.
- Tempo estimado: **2 horas**.

### Commit 2: Exercício 1 – Operações Matemáticas
- Implementação de um programa que realiza soma, subtração, multiplicação e divisão de dois números inteiros fornecidos pelo usuário.
- Utilização de `useState` para manipulação dos inputs.
- Validação dos dados inseridos com alertas para valores inválidos.
- Utilização de `toFixed` para limitar casas decimais, conforme [Stack Overflow](https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary).
- Tempo estimado: **30 minutos**.

### Commit 3: Exercício 2 – Verificação de Palíndromo
- Implementação de uma solução que remove espaços e pontuações com `replace`, converte para minúsculas, inverte a string e compara com a string inicial limpa.
- Validação dos dados para garantir que sejam palavras ou frases válidas.
- Referência: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Commit 4: Interface de Login
- Separação da interface de login em um commit específico.
- Interface semelhante à do primeiro exercício.

### Commit 5: Lógica de Autenticação
- Criação de um serviço para autenticação utilizando a biblioteca Axios.
- Implementação de um botão de logout para facilitar os testes.
- Conexão do projeto à Vercel, com resolução de problemas relacionados ao tipo `any`.

## Como Executar a Aplicação

1. Clone o repositório:
    ```bash
    git clone <https://github.com/EndrioAlberton/desafio-max>
    cd <desafio-max>
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).
