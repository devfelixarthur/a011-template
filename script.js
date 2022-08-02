// Exercicio de Fixação.

const carrinho ={
    nome: 'Arthur Felix',
    Pagamento: 'Pix',
    Endereço: 'Rua Ipoméia, 43, Cs 5',
    
}
carrinho.Compras = [
    {
        Produto: 'Batata',
        Preco: 3.50,
        Quantidade: 2
    },
    {
        Produto: 'Cenoura',
        Preco: 4.50,
        Quantidade: 4
    },
    {
        Produto: 'Carré',
        Preco: 12.00,
        Quantidade: 3
    }
        ]
console.log (carrinho)
        const copiaCarrinhoPresente = {
    ...carrinho,
    nome: 'Juliana',
    Pagamento: 'Débito'
}
console.log(copiaCarrinhoPresente)

