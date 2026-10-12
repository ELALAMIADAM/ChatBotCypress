
class ProductPage {
    elements ={
        Electronic:() => cy.get('[data-testid="ecom-category-electronics"]'),
        qte_product:() => cy.get('[data-testid="quantity-1"]'),
        // product_index:() => '[data-testid=\"quantity-',
        add_to_cart:() => cy.get('[data-testid="add-to-cart-1"]'),
        // add_to_cart_index:() => '[data-testid="add-to-cart-',
        cart_link:() => cy.get('[data-testid="ecom-cart-button"]'),
        cartNbr:() => cy.get('[class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"]'),
        proceed:() => cy.get('[data-testid="ecom-proceed-to-buy"]'),
        address_name:() => cy.get('[data-testid="ecom-address-name"]'),
        save_address:() => cy.get('[data-testid="ecom-save-address"]'),
        street:() => cy.get('[data-testid="ecom-address-street"]'),
        city:() => cy.get('[data-testid="ecom-address-city"]'),
        state:() => cy.get('[data-testid="ecom-address-state"]'),
        zip:() => cy.get('[data-testid="ecom-address-zip"]'),
        cardnbr:() => cy.get('[data-testid="ecom-card-number"]'),
        ecomexp:() => cy.get('[data-testid="ecom-expiry"]'),
        ccv:() => cy.get('[data-testid="ecom-cvv"]'),
        clickBuy:() => cy.get('[data-testid="ecom-buy-now"]'),
        msgSucces:() => cy.contains('p','Woohoo!! Successfully purchased')
    }

    ClickElectronic(){
        this.elements.Electronic().click()
    }
    qteProduct(s){
        this.elements.qte_product().clear()
        this.elements.qte_product().type(s)
    }
    add_to_cart(){
        this.elements.add_to_cart().click()
    }
    productqtIndex(s){
        cy.get('[data-testid="quantity-'+s+'"]').clear()
        cy.get('[data-testid="quantity-'+s+'"]').type(5)
    }
    AddProductIndex(s){
        cy.get('[data-testid="add-to-cart-'+s+'"]').click()
    }
    cart_link(){
        this.elements.cart_link().click()        
    }
    CartNbr(){
        return this.elements.cartNbr()
    }

    proceedTo(){
        this.elements.proceed().click()
    }

    addressName(s){ 
        this.elements.address_name().type(s)
    }

    zip(s){ 
        this.elements.zip().type(s)
    }
    city(s){ 
        this.elements.city().type(s)
    }
    state(s){ 
        this.elements.state().type(s)
    }
    street(s){ 
        this.elements.street().type(s)
    }
    save_address(){ 
        this.elements.save_address().click()
    }

    Address(s1,s2,s3,s4,s5){
        this.street(s1)
        this.state(s2)
        this.addressName(s3)
        this.city(s4)
        this.zip(s5)
        this.save_address()
    }

    cardnbr(s){ 
        this.elements.cardnbr().type(s)
    }
    ecomexp(s){ 
        this.elements.ecomexp().type(s)
    }
    ccv(s){ 
        this.elements.ccv().type(s)
    }
    clickBuy(){ 
        this.elements.clickBuy().click()
    }
    Buy(s1,s2,s3){
        this.cardnbr(s1)
        this.ecomexp(s2)
        this.ccv(s3)
        this.clickBuy()
    }

    MsgSucces(){
        return this.elements.msgSucces()
    }
    
}

export default new ProductPage()