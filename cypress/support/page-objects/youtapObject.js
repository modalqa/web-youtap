const url = Cypress.config('baseUrl');

exports.youtap = {
  accessSite() {
    cy.visit(url);

  },
  content(){
      cy.get('h1').contains('Solusi Youtap Untuk Semua Usaha');
      cy.get('#w-dropdown-toggle-0 > div:nth-child(1)')
      .contains('Solusi Usaha')
      .click()
      .wait(100);

      cy.get('#w-dropdown-list-0 > [href="/sme"]').click();
  },
  menuContact(){
    cy.get('nav > a:nth-child(5)')
    .contains('Contact Us')
    .click()
    .wait(100);
  },
  contactForm(){
    cy.contains('What type of business do you own / work for?')
  },
  inputContact(){
    cy.get('[data-name="Name"]')
    .type('Faris')

    cy.get('#Enterprise')
    .click({force: true})

    cy.get('[data-name="Company Business Name"]')
    .type('modalqa')

    cy.get('[data-name="Phone Number"]')
    .type('081385435013')

    cy.get('[data-name="Email"]')
    .type('faris@yopmaul.com')

    cy.get('[data-name="Message"]')
    .type('Maaf ini hanya data testing dari team software quality assurance')

    cy.get('input[type="submit"]')
    .click()
    .wait(100)

  },
  formThankYou(){
      cy.contains('Thank you!')
  }
}