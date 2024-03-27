/// <reference types="cypress" />

describe('login', () => {
    it('should successfully log into our app', () => {
      cy.login()
    });
  });


describe('exchange', () => {
    beforeEach(() => {
        cy.login();
    });
    it('user should be able to execute an operation', () => {
       cy
            .visit('/?tab=transferir')
            .wait(1000)
            .get('[name=amount_sent]').type('2')
            .get('[name=currency_received]').select('USDT')
            .get('[name=email]').type('agustinagomez@gmail.com')
            .get('[name=description]').type('Regalo')
            .wait(1000)
            .get('button').contains('Continuar').click()
            .wait(1000)
            .get('button').contains('Transferir').click()
            .get('[data-test=modal]').contains('¡Envío exitoso!').should("be.visible")
            .wait(1000)
            .get('[data-test=close-modal]').click()
    });
})

describe('logout', () => {
    beforeEach(() => {
        cy.login();
    });
    it('should log out succesfully', () => {
        cy
            .wait(1000)
            .get('button').contains('Cerrar sesión').click()
            .url().should('contain', '/auth/login')
            .wait(1000)
    });
})
