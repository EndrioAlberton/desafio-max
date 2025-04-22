# Desafio Técnico

Este projeto foi desenvolvido como parte de um desafio técnico. Abaixo, você encontrará informações sobre a estrutura do projeto, decisões tomadas e como executar a aplicação. O projeto pode ser acessado em: [https://desafio-max.vercel.app/](https://desafio-max.vercel.app/),

## Tecnologias Utilizadas

- **TypeScript**: Já possuía conhecimento prévio na linguagem, adquirido durante o desenvolvimento de outros sistemas em contextos acadêmicos.
- **Next.js**: Escolhido por ser um requisito da vaga e por representar o próximo passo natural na minha evolução como desenvolvedor front-end, dado meu conhecimento prévio em React e TypeScript.
- **Tailwind**: Utilizado para estilização, aproveitando a oportunidade para aprender esta ferramenta.
- **Axios**: Utilizado para realizar requisições HTTP.

## Estrutura do Projeto

A estrutura do projeto foi organizada com base na [documentação oficial do Next.js](https://nextjs.org/docs/app/getting-started/project-structure). Todos os exercícios foram mantidos dentro de um único projeto, permitindo a navegação entre eles.

## Commits e Decisões

### Commit 1: Configuração Inicial
- Configuração básica do projeto com Next.js e Tailwind CSS.
- Organização inicial dos arquivos e pastas.
- Tempo estimado: **2 horas**.

### Exercício 1 – Operações Matemáticas
- Implementação de um programa que realiza soma, subtração, multiplicação e divisão de dois números inteiros fornecidos pelo usuário.
- Utilização de `useState` para manipulação dos inputs.
- Validação dos dados inseridos com alertas para valores inválidos.
- Utilização de `toFixed` para limitar casas decimais, conforme [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).
- Tempo estimado: **30 minutos**.

### Exercício 2 – Verificação de Palíndromo
- Implementação de uma solução que remove espaços e pontuações com `replace`, converte para minúsculas, inverte a string e compara com a string inicial limpa.
- Validação dos dados para garantir que sejam palavras ou frases válidas.
- Referência: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).
- Tempo estimado: **40 minutos**.

### Interface de Login
- Separação da interface de login em um commit específico.
- Interface semelhante à do primeiro exercício.
- Tempo estimado: **20 minutos**.

### Lógica de Autenticação do login
- Criação de um `service` para autenticação utilizando a biblioteca Axios.
- Alertas para exibir os erros retornados pela API.
- Implementação de um botão de logout para facilitar os testes.
- Conexão do projeto à Vercel, com resolução de problemas relacionados ao tipo `any`.
- Tempo estimado: **50 minutos**.

### Registro de Usuário

- Implementada a função `registrar`, que chama o serviço `register`, armazena o token no `localStorage` e atualiza o estado `registeredUser` em caso de sucesso. Erros são exibidos com `alert()`.
- Adicionado um botão "Voltar para Login" com `Link` para `/login` e um botão "Ir para Login" exibido após o registro bem-sucedido.
- Utilizando Axios para enviar uma requisição `POST`.
- Tempo estimado: **1 hora**.


### Listagem de Usuários

- Enfrentei dificuldades iniciais ao manipular o token de autenticação, mas após realizar alguns testes, consegui ajustar o código corretamente.
- Criação de um `service` para listar os usuários, utilizando o `token` de autenticação no `header` da requisição.
- Implementação de um modal para exibir os dados dos usuários, pode ser acessado após o login.
- Tempo estimado: **1 hora e 30 minutos**.

### Alterar Senha

- Durante os testes, identifiquei um problema no endpoint, que retornava um erro 404. Após contato com a equipe, ajustei o método HTTP de `POST` para `PATCH`, que era o correto.
- Criação de um `service` chamado `changePassword` para realizar a requisição ao endpoint de alteração de senha. O serviço utiliza Axios para enviar os dados necessários, incluindo o `token` de autenticação no `header`.
- Tratamento de erros para exibir mensagens claras ao usuário em caso de falha na requisição.
- Como a troca de senha exige autenticação prévia, alterei a interface para incluir os campos "Senha Antiga" e "Nova Senha" na tela exibida após o login.
- Validação dos campos para garantir que a senha antiga e a nova sejam fornecidas corretamente.
- Tempo estimado: **1 hora**.

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
