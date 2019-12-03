import React, { Component }from 'react';

import MyContext from './MyContext';

class MyProvider extends Component {
    
    constructor(){
        super();
        this.state = {
            wordBank: []
        };
    
    }
    
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
            wordBank: data
        })
    
    }
  
    render() {
        return (
            <MyContext.Provider
                value={this.state.wordBank}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider