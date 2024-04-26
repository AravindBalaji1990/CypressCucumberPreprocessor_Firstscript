import {Given,When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given("User launches the google website",()=> {
    cy.visit("https://google.com/")
})

When("User gets the title of the page for validation", () =>{
    cy.title().should('eq', 'Google')
})

Then("User checks for the textbox in the page", () =>{
    cy.get("textarea[name='q']").should('be.visible')
})