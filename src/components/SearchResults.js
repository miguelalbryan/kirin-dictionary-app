import React, {Component} from 'react'
import Card from './Card'
import MyContext from './MyContext'


class SearchResults extends Component{

 

    render(){
        return(
            
            <div>
            {/* <!-- Begin Page Content --> */}
               <div className="container-fluid">                    
                   {/* <!-- Page Heading --> */}
                   <div className="d-sm-flex align-items-center justify-content-between mb-4">
                       <h1 className="h3 mb-0 text-gray-800">Search results for {this.props.match.params.word}...</h1>
                   </div>
                    
                   <div className="row">

                <MyContext.Consumer>
                {({searchResults}) => {

                        if(searchResults){
                            return searchResults.map((key,index)=>{
                                return <Card
                                word={key.japanese}
                                key={index}
                                index={index}
                                id={key._id}
                                furigana={key.furigana}
                                tags={key.tags}
                                meanings={key.meanings}
                                />})
                            }
                        
                    }}
                </MyContext.Consumer>
                   </div>
                   
                 
                  </div>
            {/* <!-- /.container-fluid --> */}

       </div>
        
            
   
        )
    }

}

export default SearchResults

