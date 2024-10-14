const perfil = require('../fixtures/perfil.json')
import { faker } from '@faker-js/faker';

let email = faker.internet.email()

Cypress.Commands.add('cadastro', () => {
    cy.visit('/minha-conta')
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(perfil.senha, {log: false})
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2) > a').click()
})

Cypress.Commands.add('login', () => {
    cy.get('#username').type(email)
    cy.get('#password').type(perfil.senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('finalizarCheckout', () => {
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').clear().type(faker.person.firstName())
    cy.get('#billing_last_name').clear().type(faker.person.lastName())
    cy.get('#billing_company').clear().type(faker.commerce.department())
    cy.get('#billing_address_1').clear().type(faker.location.streetAddress() ,faker.location.buildingNumber())
    cy.get('#billing_address_2').clear().type(faker.location.buildingNumber())
    cy.get('#billing_city').clear().type(faker.location.city())
    cy.get('#billing_postcode').clear().type('12345-123')
    cy.get('#billing_phone').clear().type('55999999999')
    cy.get('#billing_email').clear().type(email)
    cy.get('#order_comments').type('Entrega tudo certinho aí obg')
    cy.get('#terms').click()
    cy.get('#place_order').click()
})

