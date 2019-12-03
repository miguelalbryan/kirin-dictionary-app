import React, { Component }from 'react';
import './App.css';
import MyProvider from './components/MyProvider'
import Sidebar from './components/Sidebar';
import ContentWrapper from './components/ContentWrapper';

const ThemeContext = React.createContext('light');

class App extends Component{

  constructor(){
    super();
    // this.state = {
    //   wordBank: []
    // }
  }

//   async componentDidMount() {
//     const result = await fetch('/api/words');
//     const data = await result.json();

//     // const prevState = this.state;
//     // const newState = {recipes: data.results};
//     // const nextState = Object.assign({}, prevState, newState);
//     // this.setState(nextState)
//         const prevState = this.state;
//     this.setState({
//         ...prevState,
//         wordBank: data
//     })

// }

  render(){
      return (
    <MyProvider>
    <div className="App">
      <div id="wrapper">
      <Sidebar />
      <ContentWrapper  />

    </div>
    </div>
    </MyProvider>
  );
  }

}

export default App;
