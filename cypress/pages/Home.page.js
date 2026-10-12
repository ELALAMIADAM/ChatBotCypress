
class HomePage {
    elements ={
        newgel:() => cy.get('[data-title="newgel newgel+ product questions pricing usage support"]'),
    }

    ClickLinkGel(){
        this.elements.newgel().click()
    }
}

export default new HomePage()