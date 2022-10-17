import App from 'App'

const counterSelector = '[data-cy=counter]'

describe('App.cy.ts', () => {
  it('playground', () => {
    cy.mount(<App />)
    cy.get(counterSelector).should('have.text', '0')
  })
})
