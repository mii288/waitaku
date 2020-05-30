/// <reference types="Cypress" />
describe("pages/table.tsx", () => {
  beforeEach(() => {
    cy.visit("/table")
  })

  it("要素の大きさが変更できること", () => {
    cy.viewport("macbook-15")
    cy.get('[data-test="stage"]')
      .click(50, 50)
      .trigger("mousedown", 110, 110)
      .trigger("mousemove", 200, 150)
      .trigger("mouseup")
      .toMatchImageSnapshot()
  })
})
