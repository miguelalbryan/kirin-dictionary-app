import React, {Component} from 'react'

class Card extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            
                <div className="col-lg-6">
                    
                    {/* <!-- Collapsable Card Example --> */}
                    <div className="card shadow mb-4">
                            {/* <!-- Card Header - Accordion --> */}
                            <a href={"#collapseCardExample"+this.props.word} className="d-block card-header py-3 d-flex flex-row align-items-center justify-content-between" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                                <h6 className="m-0 font-weight-bold text-primary">{this.props.word}</h6>
                            </a>       
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="">(Furigana goes here)</h6>
                        <div className="dropdown no-arrow"> 
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Options:</div>
                            <a className="dropdown-item" href="#">Save</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Delete</a>
                            
                            </div>
                        </div>
                        </div>
                       
                            {/* <!-- Card Content - Collapse --> */}
                            <div className="collapse show" id={"collapseCardExample"+this.props.word}>
                                <div className="card-body">
                                        <div style={{left:"300px"}} className="text-xs font-weight-bold text-uppercase mb-1">Anthropomorphism:</div>
                                        <hr/>
                                        <ul>
                                            apple (fruit
                                            <li>apple tree (Malus pumila) ［林檎］</li>
                                        
                                        </ul>
                                
                                </div>
                                
                            </div>
                    </div>

                    


                 
                </div>  
            
            
        )
    }
}

export default Card