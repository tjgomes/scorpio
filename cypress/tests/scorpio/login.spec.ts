import {USERS} from "../../fixtures/user/user.js";

describe("Login Workflow", () => {

  beforeEach(()=> {
    cy.visit('/'); // visit baseUrl
    cy.url().should('include', Cypress.config().baseUrl);
  })
  
  it("should login with invalid credentials and assert login fails", () => {    
    cy.get('[data-cy=username-input]').type(USERS.USERS.email).find('input').should('have.value',  USERS.USERS.email);
    cy.get('[data-cy=password-input]').type(USERS.USERS.password).find('input').should('have.value', USERS.USERS.password);
    cy.get('[data-cy=login-button]').click();
    cy.get('.loader').should('not.exist'); // wait until loader spinner disappears
    cy.get('[class="c:grey3 r:18 ng-star-inserted"]').should('contain', 'Invalid Username or Password.'); // verify server shows invalid username message.
  });
});
