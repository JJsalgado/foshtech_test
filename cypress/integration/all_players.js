describe('all players', () => {

    //the all players request is launched as alias before each test
    beforeEach(() => {
        cy.request('https://www.balldontlie.io/api/v1/players').as('all_players');
    });

    it('verify request returns JSON', () => {
        cy.get('@all_players').its('headers').its('content-type').should('include', 'application/json')
    })

    it('verify the request returns the correct status code', () => {
        cy.get('@all_players')
            .its('status')
            .should('equal', 200);
    })

    it('verify the request returns the correct number of ', () => {
        cy.get('@all_players').then((response)=>{
            expect(response.body.meta.total_count).equal(3755)
    })
    })
})