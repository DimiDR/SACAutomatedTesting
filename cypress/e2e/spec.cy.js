describe("template spec", () => {
  it("passes", () => {
    cy.visit(
      "https://hanacloudservices-eu.accounts.ondemand.com/saml2/idp/sso/hanacloudservices-eu.accounts.ondemand.com"
    );
    cy.get("#username").type("dimitri.rybak@atos.net");
    cy.get("#password").type("P2}4)+~;NNN!");
    cy.get("#login-button").click();
  });
});
