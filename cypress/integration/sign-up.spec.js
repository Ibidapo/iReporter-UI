/* eslint-disable no-undef */
describe("Join-Us Page", () => {
  beforeEach(() => {
    cy.visit("/join-us")
  })

  it("it should not register user, as account already exists", () => {
    cy.get("input[name=name]")
      .type("efe")
      .get("input[name=email]")
      .type("efe.agare@mail.com")
      .get("input[name=password]")
      .type("password")
      .get("button[type=submit]")
      .click()
      .get(".react-toast-notifications__toast__content")
      .should("have.text", "Account already exists")
  })

  it("it should not register user, as credentials are invalid", () => {
    cy.get("button[type=submit]")
      .click()
      .get(".react-toast-notifications__toast__content")
      .should("have.text", "Invalid credentials")
  })
})
