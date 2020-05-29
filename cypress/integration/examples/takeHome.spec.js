/// <reference types="Cypress" />
context('Entry Home', () => {
  beforeEach(() => {
    //runs before each it
    cy.visit('/');
    })
  
  it('Opens an landing page and moves to registration', () => {
	//enter test code
    cy.matchImageSnapshot('landingpage');
    cy.get('[class="nav-item"]').eq(1).click()
    cy.wait(1000)
    cy.matchImageSnapshot('signup page', {
      failureThreshold: 0.01, // threshold for entire image
      failureThresholdType: 'percent', // percent of image or number of pixels
      customDiffConfig: { threshold: 0.0 }, // threshold for each pixel
      capture: 'viewport', // capture viewport in screenshot
    });
  })
})

context('Course Home', () => {
  beforeEach(() => {
    //runs before each it
    cy.visit('/');
  })

  it('Opens an landing page and moves to registration', () => {
    //enter test code
    cy.get('[class="nav-item"]').eq(0).click()
    cy.wait(1000)
    cy.matchImageSnapshot('loginpage');
    cy.get('#username').type('bruce')
    cy.get('#password').type('12345')
    cy.get('form.ng-dirty > .btn').click()
    cy.wait(5000)
    cy.matchImageSnapshot('course page');
  })
})
