# StockFlow

Um gerenciador de estoque desenvolvido com **JavaScript** e **Node.js**, executado pelo terminal.

O StockFlow é um projeto de estudo criado para praticar lógica de programação e desenvolver aplicações de linha de comando com Node.js.

## Funcionalidades

- **Cadastrar produtos:** registra o nome, a quantidade inicial em estoque e a quantidade mínima.
- **Validar dados:** rejeita nomes vazios, valores negativos e entradas numéricas inválidas. Também aceita quantidades decimais.
- **Evitar produtos duplicados:** não permite cadastrar produtos com o mesmo nome, mesmo quando há diferenças entre letras maiúsculas e minúsculas ou espaços nas extremidades.
- **Listar produtos:** exibe os produtos cadastrados e suas informações de estoque.
- **Buscar produtos:** localiza um produto pelo nome, sem diferenciar letras maiúsculas e minúsculas.
- **Atualizar estoque:** permite alterar a quantidade atual e a quantidade mínima de um produto.
- **Remover produtos:** permite excluir um produto após confirmação.
- **Listar estoque baixo:** exibe os produtos cuja quantidade atual está abaixo da quantidade mínima.
- **Tratar inventário vazio:** informa quando ainda não existem produtos cadastrados.

## Menu

```text
1 - Cadastrar produto
2 - Listar produtos
3 - Buscar produto
4 - Atualizar estoque
5 - Remover produto
6 - Listar estoque baixo
0 - Sair
```

## Tecnologias

- JavaScript
- Node.js
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) — leitura de entradas pelo terminal.

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório:

   ```bash
   git clone https://github.com/kx7-io/stockflow.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd stockflow
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o programa:

   ```bash
   node index.js
   ```

## Estrutura dos produtos

Cada produto é representado por um objeto com três propriedades:

```js
{
    nome: 'Refrigerante',
    estoque: 10,
    minimo: 5
}
```

## Limitações atuais

Atualmente, os produtos ficam armazenados apenas na memória enquanto o programa está em execução. Ao fechar o programa, os dados cadastrados são perdidos.

## Próximas etapas

- [ ] Salvar e carregar os produtos usando um arquivo JSON com o módulo `fs`.
- [ ] Continuar melhorando a validação e a organização do código.

## Status

**Em desenvolvimento.** As funcionalidades principais do gerenciador de estoque já foram implementadas.
