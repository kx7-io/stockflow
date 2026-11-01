# StockFlow

Um gerenciador de estoque feito em **JavaScript** e **Node.js**, executado pelo terminal.

O StockFlow é um projeto de estudo que estou desenvolvendo para praticar lógica de programação e aprender a construir aplicações de linha de comando com Node.js.

## O que já funciona

- **Cadastrar produtos:** informa nome, quantidade inicial em estoque e quantidade mínima.
- **Validar os dados:** não aceita nome vazio, estoque negativo ou entradas que não resultem em um número válido.
- **Listar produtos:** mostra os produtos cadastrados, com estoque atual e quantidade mínima.
- **Avisar quando a lista está vazia:** informa quando ainda não há produtos cadastrados.

## Menu

```text
1 - Cadastrar produto
2 - Listar produtos
3 - Buscar produto          (em desenvolvimento)
4 - Atualizar estoque       (em desenvolvimento)
5 - Remover produto         (em desenvolvimento)
6 - Listar estoque baixo    (em desenvolvimento)
0 - Sair
```

## Tecnologias

- JavaScript
- Node.js
- [prompt-sync](https://www.npmjs.com/package/prompt-sync), para receber entradas pelo terminal

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

4. Inicie o programa:

   ```bash
   node index.js
   ```

## Como os produtos são armazenados

Cada produto é representado por um objeto com três propriedades:

```js
{
    nome: 'Refrigerante',
    estoque: 10,
    minimo: 5
}
```

Por enquanto, os produtos ficam guardados em memória enquanto o programa está aberto. Ao encerrar a execução, os dados cadastrados são perdidos. A gravação em arquivo JSON está prevista para uma próxima etapa.

## Próximas etapas

- [ ] Buscar um produto pelo nome
- [ ] Atualizar a quantidade em estoque
- [ ] Remover um produto
- [ ] Listar produtos com estoque baixo
- [ ] Salvar e carregar os produtos usando JSON

## Status

**Em desenvolvimento.** Novas funções serão adicionadas conforme o projeto evoluir.
