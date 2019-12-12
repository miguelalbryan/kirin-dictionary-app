import React, {Component} from 'react'


class Sidebar extends Component{
 
    render(){
        return(
            <div>
                

{/* <!-- Sidebar --> */}
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      {/* <!-- Sidebar - Brand --> */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
    
        <div className="sidebar-brand-text mx-3"> KIRIN </div>
      </a>



      {/* <!-- Divider --> */}
      <hr className="sidebar-divider"/>
      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        Japanese
      </div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="/wordBank" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-cog"></i>
          <span>Word Bank</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Category:</h6>
            <a className="collapse-item" href="/wordBank/category/all">All</a> {/*This is where you can make a collapsable item active*/}
          </div>
        </div>
      </li>

      
      {/* <!-- Nav Item - Tables --> */}

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <a className="nav-link" href="/wordOfTheDay">
          <i className="fas fa-fw fa-table"></i>
          <span>Word of the Day</span></a>
      </li>



      {/* <!-- Divider --> */}
      <hr className="sidebar-divider"/>
    </ul>
    {/* <!-- End of Sidebar --> */}

    

    

            </div>
        )
    }

}

export default Sidebar