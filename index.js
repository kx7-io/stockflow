const prompt = require('prompt-sync')();
let escolhaPainel = undefined;
let produtos = [];

// Função de cadastrar produtos
function cadastrarProduto() {
    // Criação do objeto
    let produto = { nome: '', estoque: 0, minimo: 0 };

    // Definir nome,estoque,minimo
    produto.nome = prompt('Nome do produto: ');
    let estoqueTexto = prompt('Quantidade inicial em estoque: ');
    let minimoTexto = prompt('Quantidade mínima de estoque: ');

    // Verificação
    while ((estoqueTexto !== '' && !/^\d+(\.\d+)?$/.test(estoqueTexto)) || (minimoTexto !== '' && !/^\d+(\.\d+)?$/.test(minimoTexto))) {
        console.log('Entrada inválida! Digite números válidos, sem letras ou valores negativos.');

        estoqueTexto = prompt('Quantidade inicial em estoque: ');
        minimoTexto = prompt('Quantidade mínima de estoque: ');
    }

    while (produto.nome.trim().length < 1) {
        console.log('Nome inválido! O produto precisa ter um nome e não pode conter apenas espaços.');
        produto.nome = prompt('Nome do produto: ');
    }

    // Converter depois da validação
    produto.estoque = Number(estoqueTexto);
    produto.minimo = Number(minimoTexto);
    produto.nome = produto.nome.toLowerCase();

    // Lançamento do produto no array produtos
    produtos.push(produto);
}


// Função de listar produtos
function listarProdutos() {
    console.log('========== PRODUTOS CADASTRADOS ==========');

    // Verificador se tem produto cadastrado
    if (produtos.length === 0) {
        console.log('Nenhum produto cadastrado');
    } else {
        // Se tiver executa este bloco
        for (const produtoListado of produtos) {
            console.log(`Produto: ${produtoListado.nome}`);
            console.log(`Estoque: ${produtoListado.estoque}`);
            console.log(`Estoque minimo: ${produtoListado.minimo}`);
            console.log('---------------------');
        }
    }
}

function buscarProduto() {
    let produtoBuscado = prompt('Digite o nome do produto que você quer buscar: ');
    produtoBuscado = produtoBuscado.toLowerCase();
    for (let produtoOriginal of produtos) {

        if (produtoOriginal.nome.toLowerCase() === produtoBuscado.toLowerCase()) {
            console.log(`Produto: ${produtoOriginal.nome}`);
            console.log(`Estoque: ${produtoOriginal.estoque}`);
            console.log(`Estoque minimo: ${produtoOriginal.minimo}`);
        } else if (produtoOriginal.nome != produtoBuscado) {
            console.log('Tentando localizar...');
        } else {
            console.log('Erro ou produto não existe!');
        }
    }
}
// Função principal painel
function painel() {
    // Definir escolha do painel sempre que for executada a função
    escolhaPainel = undefined;

    // Painel stock
    console.log('========== STOCKFLOW ==========')
    console.log();
    console.log(`1 - Cadastrar produto
2 - Listar produtos
3 - Buscar produto
4 - Atualizar estoque
5 - Remover produto
6 - Listar estoque baixo
0 - Sair`
    )

    // Pegar escolha do usuário
    escolhaPainel = prompt('Qual função você dejesa selecionar: ');

    // Decisão de acordo com a escolha do usuário
    switch (escolhaPainel) {
        case '1':
            console.log('Abrindo cadastro de produto...');
            cadastrarProduto();
            break;
        case '2':
            console.log('Exibindo produtos cadastrados...');
            listarProdutos();
            break;
        case '3':
            console.log('Buscando produto...');
            buscarProduto();
            break;
        case '4':
            console.log('Abrindo atualização de estoque...');
            break;
        case '5':
            console.log('Removendo produto...');
            break;
        case '6':
            console.log('Listando produtos com estoque baixo...');
            break;
        case '0':
            console.log('Encerrando StockFlow. Até mais!');
            break;
        default:
            console.log('Opção inválida! Escolha um número de 0 a 6.');
            break;
    }
}

// Repetir a função painel até o usuario selecionar 0
while (escolhaPainel != '0') {
    painel();
}