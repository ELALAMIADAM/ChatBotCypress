///<reference types = 'cypress'/>  
import ProductPage from "../pages/Product.page.js";
describe('a===', () => {
     beforeEach("setUp",() => {
        cy.visit('https://www.qapractice.com/practice-ecommerece-website');
    });
    afterEach("tearDown",function() {
        if(this.currentTest.state === "failed"){
            cy.screenshot(`failure-${this.currentTest.title}`)
        }
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        sessionStorage.clear() // nettoyer
    });
    it('ecommerce', () => {
        
        ProductPage.ClickElectronic()
        // ProductPage.qteProduct(5)
        // ProductPage.add_to_cart()
        ProductPage.productqtIndex(3)
        ProductPage.AddProductIndex(3)
        ProductPage.CartNbr().should('contain.text',5)
        ProductPage.cart_link()
        ProductPage.proceedTo()

        cy.wait(1000)
        ProductPage.Address('adaam','adaam','adaam','adaam','222')


        ProductPage.Buy('21321421421','2/32','321')

        ProductPage.MsgSucces().should('contain.text','Successfully purchased')
    });

});