describe('Home Page', () => {
  it('should load successfully', () => {
    cy.visit('/');
    cy.title().should('include', 'Andy Zhuo - Portfolio');
    cy.contains('PRODUCT DESIGNER');
    cy.contains('A creative coder with a passion for building');
    cy.get('img[src="/images/vitruvian_borealis.png"]').should('be.visible');
  });

  it('renders all project cards', () => {
    cy.visit('/');

    // Check for each project card
    cy.get('.project-list').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('.projectType').should('not.be.empty');
        cy.get('.title').should('not.be.empty');
        cy.get('.year').should('not.be.empty');
        cy.get('.description').should('not.be.empty');
        cy.get('img').should('have.attr', 'src').and('not.be.empty');
      });
    });
  });

  it('navigates to the correct project page when a project card is clicked', () => {
    cy.visit('/');
    const projectLinks = [
      { href: '/insights', title: 'Insights' },
      { href: '/uplift', title: 'Uplift' },
      { href: '/amplifi', title: 'Amplifi' },
      { href: '/arbimon', title: 'Arbimon' }
    ];
  
    projectLinks.forEach((project) => {
      cy.get(`a[href="${project.href}"]`).click();
      cy.url().should('include', project.href);
      cy.go('back');
    });
  });
});