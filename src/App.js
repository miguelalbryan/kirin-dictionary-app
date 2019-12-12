import React, { Component }from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import './App.css';
import MyProvider from './components/MyProvider'
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import Content from './components/Content';
import wordOfTheDay from './components/wordOfTheDay';
import SearchResults from './components/SearchResults';
import PageNotFound from './components/PageNotFound';



class App extends Component{


  render(){
      return (        
         <MyProvider>
            <div className="App">
              <div id="wrapper"> 
              <Sidebar/>
                  <div id="content-wrapper" className="d-flex flex-column"> {/*The div here wraps both the Top bar and Content page */}
                          {/* <!-- Main Content --> */}
                            <div id="content">
                            {/* <Topbar/> Topbar and Sidebar is required for all pages. This is the structure of bootstrap *sees sb- for documentation  */}
                              <Router>
                                <Topbar/>
                                <div>
                                  <Switch>
                                            <Route exact path="/" component={Content}/>
                                            <Route path="/wordBank/" component={Content}/>
                                            <Route path="/wordOfTheDay/" component={wordOfTheDay}/>                                            
                                            <Route path={`/search/:word`} component={SearchResults}/>
                                            <Route path="/*"component={PageNotFound}/>
                                            
                                  </Switch>
                                  </div>

                                </Router>
                            </div>
                          {/* <!-- End of Main Content --> */}      
                  </div>
              </div>
            </div>
          </MyProvider>
  );
  }

}

export default App;
