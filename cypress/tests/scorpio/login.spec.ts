import {USERS} from "../../fixtures/user/user.js";

describe("Login Workflow", () => {
  
  it("should login with invalid credentials and assert login fails", () => {
    cy.visit('/') // visit baseUrl
    cy.url().should('include', Cypress.config().baseUrl)
    cy.log(`user email is ${JSON.stringify(USERS.USERS)}`)
    cy.get('[data-cy=username-input]').type(USERS.USERS.email).find('input').should('have.value',  USERS.USERS.email)
    cy.get('[data-cy=password-input]').type(USERS.USERS.password).find('input').should('have.value', USERS.USERS.password)
    cy.get('[data-cy=login-button]').click()
    cy.intercept('POST', '/login2').as('waitForModule');
    cy.wait('@waitForLogin')
      .its('response.statusCode')
      .should('eq', 200); // wait until TP builder is fully loaded
    cy.get('[data-cy=icon]').should('be.visible')
  });
});
