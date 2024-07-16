// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


context('Evinced Demo Examples - Static', () => {

    it('Page Load Test', () => {
        cy.visit('https://demo.evinced.com/');
        // Scan the current page for accessibility issues and create an HTML report
        cy.evReport().should((issues) => {
            //expect(issues).to.be.empty();
        });
        // Optional: Add a rootSelector to only scan an element or section of the page. 
        // cy.evReport({ rootSelector: "#some .selector" }).should((issues) => {
        //     expect(issues).to.have.length(6);
        // });

    });


    it('Search Test', () => {
        cy.evStart()
        cy.visit('https://demo.evinced.com/');
        const BASE_FORM_SELECTOR = '#gatsby-focus-wrapper > main > div.wrapper-banner > div.filter-container';
        const SELECT_HOME_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(1) > div > div.dropdown.line`;
        const SELECT_WHERE_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(2) > div > div.dropdown.line`;
        const TINY_HOME_OPTION = `${BASE_FORM_SELECTOR} > div:nth-child(1) > div > ul > li:nth-child(2)`;
        const EAST_COST_OPTION = `${BASE_FORM_SELECTOR} > div:nth-child(2) > div > ul > li:nth-child(3)`;
        cy.get(SELECT_HOME_DROPDOWN).click();
        cy.get(TINY_HOME_OPTION).click();
        cy.get(SELECT_WHERE_DROPDOWN).click();
        cy.get(EAST_COST_OPTION).click();
        cy.evStop({ logIssues: true }).should((report) => {
            cy.evSaveFile(report, 'html', './reports/report.html').then(() => {
            })
        })
    });
});












// npx cypress open

///issue => issue.type.name == "Interactable Role" && issue.severity.name == 'Critical'