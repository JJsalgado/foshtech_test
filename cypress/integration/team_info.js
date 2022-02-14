describe('team information', () => {

    //the specific team request is launched as alias before each test
    beforeEach(() => {
        cy.request('https://balldontlie.io/api/v1/teams/24').as('team_info');
    });

    it('verify the request returns the correct status code', () => {
        cy.get('@team_info')
            .its('status')
            .should('equal', 200);
    })

    //the test checks the team response body to ensure the information
    it('verify the request returns the correct information player', () => {
        cy.get('@team_info').then((response)=>{
            expect(response.body.id).to.eq(24)
            expect(response.body.full_name).to.eq('Phoenix Suns')
            expect(response.body.name).to.eq('Suns')
        })
    })
})