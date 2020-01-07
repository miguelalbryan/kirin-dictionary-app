import React, {Component} from 'react'
import Topbar from './Topbar'
import Content from './Content'

class ContentWrapper extends Component{
    constructor(props){
        super(props)
     

    }

    render(){
        return(
          // While these types of comments can be helpful, in React we should be keeping our components so small that they aren't necessary
          // Additionally, we could move this element <div id="content-wrapper" className="d-flex flex-column"> into a component
          // such as <ContentWrapper /> to achieve a similar effect as well as improve readability
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

