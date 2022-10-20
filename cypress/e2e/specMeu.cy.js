describe('empty spec', () => {

  beforeEach('', () => {
    cy
      .navigate('/index.php')
  })
  it('passes', () => {
    cy
        .get('#searchbox').should('be.visible').type('Short').click({force:true})
        .get('.button-search').click()
    cy  .contains('.product-name','Faded Short Sleeve T-shirts').should('be.visible')
        .get('.ajax_add_to_cart_button').first().click({force:true})
    cy  .contains('span','Proceed to checkout').click()

    cy
        .contains('td','Faded Short Sleeve T-shirts').parent()
    cy  .contains('td', 'In stock').parent()
    cy  .get('#total_product').should('have.text', '$16.51')
        //.find('.icon-trash').should('be.visible').click()
   
   
        
  })
})