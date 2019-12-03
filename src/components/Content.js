import React, {Component, Fragment} from 'react'
import Card from './Card'
import MyContext from './MyContext'


class Content extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                 {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">                    
                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Search results and etcetera</h1>
                        </div>

                        <div className="row">
                        {/* <Card word={"banana"}/> */}
                                            
                        <MyContext.Consumer>
                        {context => (
                           console.log()
                           
                        )}
                        </MyContext.Consumer>
                        </div>
                        
                      
                       </div>
                 {/* <!-- /.container-fluid --> */}

            </div>
        )
    }

}

export default Content