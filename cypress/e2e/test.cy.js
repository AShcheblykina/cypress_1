describe("login page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login succesfully", () => {

    cy.login("bropet@mail.ru", "123");

    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    cy.contains("Log out").should("be.visible");
    // cy.viewport(550, 750);
  });
});
