describe('all teams', () => {

    //the all teams request is launched as alias before each test
    beforeEach(() => {
        cy.request('https://balldontlie.io/api/v1/teams').as('all_teams');
    });

    it('verify request returns JSON', () => {
        cy.get('@all_teams').its('headers').its('content-type').should('include', 'application/json')
    })

    it('verify the request returns the correct status code', () => {
        cy.get('@all_teams')
            .its('status')
            .should('equal', 200);
    })

    it('verify the request returns the correct number of results', () => {
        cy.get('@all_teams').then((response)=>{
            expect(response.body.meta.total_count).equal(30)
        })
    })
})