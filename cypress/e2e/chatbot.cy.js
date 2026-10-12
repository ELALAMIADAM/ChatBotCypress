///<reference types = 'cypress'/>  
import HomePage from "../pages/Home.page.js";
import WelcomePage from "../pages/Welcome.page.js";
describe('a===', () => {
     beforeEach("setUp",() => {
        // aller vers le site
        cy.visit('https://demobotpro.com/');
        HomePage.ClickLinkGel()
        cy.url().should('include','/newgel-demo/');
    });
    // afterEach("tearDown",function() {
    //     if(this.currentTest.state === "failed"){
    //         cy.screenshot(`failure-${this.currentTest.title}`)
    //     }
    //     cy.clearAllCookies()
    //     cy.clearAllLocalStorage()
    //     sessionStorage.clear() // nettoyer
    // });
    it('chatbot', () => {
        

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hi! 👋 Need help?');
            return true; 
            });

        WelcomePage.IconBot()


        // WelcomePage.TextInput().should('include','NewGel+ Support Assistant')
        // WelcomePage.TextInput("What is NewGel+?")

    });

});