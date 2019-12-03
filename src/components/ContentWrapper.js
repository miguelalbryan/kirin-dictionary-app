import React, {Component} from 'react'
import Topbar from './Topbar'
import Content from './Content'

class ContentWrapper extends Component{
    constructor(props){
        super(props)
     

    }

    render(){
        return(
            // <!-- Content Wrapper -->
            <div id="content-wrapper" className="d-flex flex-column">
        
              {/* <!-- Main Content --> */}
              <div id="content">

                <Topbar />
                <Content />
                
              
              </div>
              {/* <!-- End of Main Content --> */}
        
   
            </div>
            
        
            
   
        )
    }

}

export default ContentWrapper

