import React, {Component} from 'react'
import MyContext from './MyContext'

import {Link} from 'react-router-dom'
class Topbar extends Component{
    constructor(props){
      super(props)
      this.state = {
        search: ''
      }
    }


 
    handleSearchChange = (event) => {
      const input = event.target.value;

      const prevState = this.state;
      this.setState({
          ...prevState,
          search: input
      })
      console.log(this.state.search)
  };
    render(){
        return(
            <div>
                    
                {/* <!-- Topbar --> */}

                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                      
                      {/* <!-- Sidebar Toggle (Topbar) -->
                      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                      </button> */}

                      {/* <!-- Topbar Search --> */}
                      <form type="submit" onSubmit={e=>{e.preventDefault()}} className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                        <MyContext.Consumer>
                        {({searchWord}) => { 
                                    //*Need to solve in future(Unable to use history.push(), used Link instead to redirect to search results. Since Enter and button click both trigger same event )
                                    return <input onKeyPress={event=>{if(event.key === "Enter"){document.getElementById("LinkBtn").click()}}} onChange={this.handleSearchChange}type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                                    </input>
                                  }}
                        </MyContext.Consumer>
                          
                          <div className="input-group-append">
                                <MyContext.Consumer>
                                  {({searchWord}) => { 
                                    return <Link to={`/search/${this.state.search}`} id="LinkBtn" className="btn btn-primary" type="button" onClick={()=>searchWord(this.state.search)}><i className="fas fa-search fa-sm"></i></Link>
                                  }}
                              </MyContext.Consumer>
                          </div>
                        </div>
                      </form>
                      
                      {/* <!-- Topbar Navbar --> */}
                      <ul className="navbar-nav ml-auto">

                        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                        <li className="nav-item dropdown no-arrow d-sm-none">
                          <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                          </a>
                          {/* <!-- Dropdown - Messages --> */}
                          <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                              <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                                </input>
                                <div className="input-group-append">
                                  <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </li>


          <div className="topbar-divider d-none d-sm-block"></div>
        </ul>

      </nav>
      {/* <!-- End of Topbar --> */}

                
            </div>
        )
    }

}

export default Topbar