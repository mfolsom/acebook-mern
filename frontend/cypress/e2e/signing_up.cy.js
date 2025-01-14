// test now fails as it tries to sign up with existiting email
describe("Signing up", () => {
  it("with valid credentials, redirects to '/login'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.wait(6000); // wait for 5 seconds
    cy.url().should("include", "/login");
  });
    
  it("with missing password, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#email").type("someone@example.com");
    cy.get("#submit").click();
    cy.wait(6000); // wait for 5 seconds
    cy.url().should("include", "/signup");
  });

  it("with missing email, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.wait(6000); // wait for 5 seconds
    cy.url().should("include", "/signup");
  });
});