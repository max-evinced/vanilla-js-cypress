
context('Evinced Demo Site tests - Continuous', () => {
    beforeEach(() => {
        // Start the Evinced engine
        cy.evStart();
        cy.viewport(1152, 864);
    });

   afterEach(() => {
        //Stop the Evinced engine and create the JSON report
        cy.evStop({ logIssues: true }).should((report) => {
            cy.evSaveFile(report, 'html', './reports/report.html').then(() => {
            })
        })

        //Stop the Evinced engine and create an HTML report and assert on critical issues found
        // cy.evStop({ logIssues: true }).should((report) => {
        //     cy.evSaveFile(report, 'html', './reports/report.html').then(() => {
        //         expect(report.every(validation => validation.severity.name !== 'Critical')).to.be.true;
        //     })
        // })

        //Stop the Evinced engine, filter the report to only include Interactable Role issues, create the html report, assert on any critical issues
        // cy.evStop({ logIssues: true }).should((report) => {
        //     const filteredReport = report.filter(
        //         issue => issue.type.name == "Interactable Role" 
        //     )
        //     cy.evSaveFile(filteredReport, 'html', './reports/report.html').then(() => {
        //         expect(filteredReport.every(validation => validation.severity.name !== 'Critical')).to.be.true;
        //     })
        // })
   });

    it('Page Load Test', () => {
        cy.visit('https://demo.evinced.com/');
    });

    it('Search Test', () => {
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
    });
});












// npx cypress open

///issue => issue.type.name == "Interactable Role" && issue.severity.name == 'Critical'