// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

before(() => {
  cy.fixture('endpoints/config.json').then((json: any) => {
    Cypress.env('baseUrl', json[0].baseUrl);
    Cypress.env('auth', json[1].auth);
  });
  cy.getUser().then((res: any) => {
    Cypress.env('userToken', res.data[0].token);
  });
});
