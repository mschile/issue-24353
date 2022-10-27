import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit example.cypress.io", () => {
  cy.visit("https://example.cypress.io");
});

When("I start a session", () => {
  cy.session("session", () => {
    cy.setCookie('foo', 'bar');
  })
});
