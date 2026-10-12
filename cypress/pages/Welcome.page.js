
class WelcomePage {
    elements_gel ={
        iconChat :()=> cy.get('#fab-root').shadow().find(".bpFabContainer") ,
        bot_title_msg:() => cy.contains('h1','NewGel+ Support Assistant'),
        input_text:() => cy.get('#fab-root').shadow().get('[class="bpComposerInput"]'),
        first_msg:() => cy.get('#fab-root').shadow().contains('p','NewGel+ is'),
        second_msg:() => cy.get('#fab-root').shadow().contains('p','NewGel+ offers'),
        third_msg:() => cy.get('#fab-root').shadow().contains('p',"I couldn't find that information"),
    }

    IconBot(){
        this.elements_gel.iconChat.click({force : true})
    }
    TitleBotMsg(){
        return this.elements_gel.bot_title_msg()
    }
    TextInput(s){
        this.elements_gel.input_text().type(s)
    }
    FirstMsg(){
        return this.elements_gel.first_msg()
    }
    SecondMsg(){
        return this.elements_gel.second_msg()
    }
    ThirdMsg(){
        return this.elements_gel.third_msg()
    }



    
}

export default new WelcomePage()