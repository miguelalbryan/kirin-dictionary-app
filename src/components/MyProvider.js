import React, { Component }from 'react';

import MyContext from './MyContext';

class MyProvider extends Component {
    
    constructor(){
        super();
        this.state = {
            wordBank: [],
              searchResults:[]
        };

    
    }

    searchWord = this.searchWord.bind(this)

    
    async componentDidMount() {
        const result = await fetch('/api/words');
        const data = await result.json();
    
        // const prevState = this.state;
        // const newState = {recipes: data.results};
        // const nextState = Object.assign({}, prevState, newState);
        // this.setState(nextState)
            const prevState = this.state;
        this.setState({
            ...prevState,
            wordBank: data || [] //Not a very good handler for word bank will fix 
        })
        
    }
    async searchWord(word) {
        const result = await fetch(`/api/words/search/${word}`)
        const data = await result.json();

        const prevState = this.state;
        this.setState({
            ...prevState,
            searchResults: data || []//Not a very good handler for search results will fix 
        })
    }
  
    async saveWord(wordData){
        if(wordData){
            try{
                const response = await fetch('/api/words/',{
                    method:'POST',
                    body: JSON.stringify({wordData}),
                    headers:{
                        'Content-Type':'application/json',
                    }

                })

                const { data } = await response.json()
                console.log(data)
            }
            catch(e){
             console.error(e)   
            }
        }
    }

    render() {
        return (
            <MyContext.Provider
            value={{wordBank: this.state.wordBank,
                    searchResults: this.state.searchResults,
            saveWord: word=>{this.saveWord(word)}        ,
            searchWord: word =>{this.searchWord(word)}
        }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider