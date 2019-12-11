import React, {Component} from 'react'
import MyContext from './MyContext';

class Card extends Component{

    render(){
         //This prevents the function from splicing the this.prop.meaning everytime component gets loaded. Bottom*
      
        return(
                          
                <div className="col-lg-6">
                    {/* <!-- Collapsable Card Example --> */}
                    <div className="card shadow mb-4">
                            {/* <!-- Card Header - Accordion --> */}
                            <a href={"#collapseCardExample"+this.props.word} className="d-block card-header py-3 d-flex flex-row align-items-center justify-content-between" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
    <h6 className="m-0 font-weight-bold text-primary">{this.props.word}{this.props.furigana ? '('+this.props.furigana+')' : null}</h6>
                            </a>

                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            {
                            
                            Object.keys(this.props.meanings).splice(0,1).map((key,index)=>{
                                    return <div key={index}>{this.props.meanings[key].english}</div>
                                    })
                                    }
                            <div className="dropdown no-arrow"> 
                            <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Options:</div>
                            
                            <MyContext.Consumer>
                                            {({searchResults,saveWord}) => {
                                                    if(searchResults){
                                                        return  <a className="dropdown-item" href="/" onClick={e=>{{e.preventDefault();saveWord(searchResults[this.props.index])}}}>Save</a>
                                                        }
                                                }}
                        </MyContext.Consumer>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/" onClick={e=>{{e.preventDefault();}}}>Delete</a>
                                    
                            </div>
                        </div>
                        </div>
                       
                            {/* <!-- Card Content - Collapse --> */}
                            <div className="collapse show" id={"collapseCardExample"+this.props.word}>
                                <div className="card-body">
                                    {this.props.tags ? 
                                    [<div key={Math.random()} style={{left:"300px"}} className="text-xs font-weight-bold text-uppercase mb-1">{this.props.tags.map((key)=>{return <div key={key}>{key}</div>})}</div>]
                                    : null}

                            {                
                            Object.keys(this.props.meanings).splice(1,1).map((key,index)=>{
                                    return <div key={index}>{this.props.meanings[key].english}</div>
                                    })
                            }
                           
                           {
                            Object.keys(this.props.meanings).splice(0,1).map((key,index)=>{
                                    return this.props.meanings[key].sentences ? this.props.meanings[key].sentences.map((key)=>{return <div key={index}><hr/>{key.japanese}</div>}):null
                                    })
                           }
                           

                                
                                </div>
                                
                            </div>
                    </div>

                    


                 
                </div>  
            
            
        )
    }
}

export default Card