const perfil = require('../fixtures/perfil.json')

Cypress.Commands.add('login', () => {
    cy.visit('/minha-conta')
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('finalizarCheckout', () => {
    cy.visit('/checkout/')
            cy.get('#billing_company').clear().type('Will.QA')
            cy.get('#billing_address_1').clear().type('Rua 500, N° 500')
            cy.get('#billing_address_2').clear().type('Ap 500')
            cy.get('#billing_city').clear().type('São Paulo')
            cy.get('#billing_postcode').clear().type('12345-123')
            cy.get('#billing_phone').clear().type('55999999999')
            cy.get('#order_comments').type('Entrega tudo certinho aí obg')
            cy.get('#terms').click()
            cy.get('#place_order').click()
})

