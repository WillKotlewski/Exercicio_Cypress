/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json');
const produtos = require('../fixtures/produtos.json');
import CheckoutPage from '../support/page_objects/Checkout.page';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
    Quero acessar a Loja EBAC   
    Para fazer um pedido de 4 produtos 
    Fazendo a escolha dos produtos
    Adicionando ao carrinho
    Preenchendo todas opções no checkout
    E validando minha compra ao final */

    beforeEach(() => {
        cy.cadastro()
        cy.login()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.fixture('produtos').then(dados => {
            CheckoutPage.buscarProduto(dados[0].nomeProduto)
            CheckoutPage.addProdutoCarrinho(dados[0].tamanho , dados[0].cor)
            CheckoutPage.buscarProduto(dados[1].nomeProduto)
            CheckoutPage.addProdutoCarrinho(dados[1].tamanho , dados[1].cor)
            CheckoutPage.buscarProduto(dados[2].nomeProduto)
            CheckoutPage.addProdutoCarrinho(dados[2].tamanho , dados[2].cor)  
            CheckoutPage.buscarProduto(dados[3].nomeProduto)
            CheckoutPage.addProdutoCarrinho(dados[3].tamanho , dados[3].cor)
            cy.finalizarCheckout()
            cy.get('.woocommerce-order-details__title').should('exist')
        })
    });
})