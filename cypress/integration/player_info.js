describe('player information', () => {

    //the specific player request is launched as alias before each test
    beforeEach(() => {
        cy.request('https://balldontlie.io/api/v1/players/237').as('player_info');
    });

    it('verify the request returns the correct status code', () => {
        cy.get('@player_info')
            .its('status')
            .should('equal', 200);
    })

    //the test checks the player response body to ensure the information
    it('verify the request returns the correct information player', () => {
        cy.get('@player_info').then((response)=>{
            expect(response.body.id).to.eq(237)
            expect(response.body.first_name).to.eq('LeBron')
            expect(response.body.last_name).to.eq('James')
        })
    })
})