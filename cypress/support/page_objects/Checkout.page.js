class Produtos {

    VisitarUrl(){
        cy.visit('/produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[type="text"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    addProdutoCarrinho(tamanho, cor) {
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.single_add_to_cart_button').click()
    }











}

export default new Produtos()