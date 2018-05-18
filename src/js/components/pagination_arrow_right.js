import React,{ Component } from 'react';
import ReactDom from  'react-dom';

export default class PaginationArrowLeft extends Component{
  constructor(props){
    super(props);
  }

  handleClick(i){
    this.props.turn(i);
  }

  render(){
    return(
      <span onClick={this.handleClick.bind(this,1)} className="paginationArrowRight">&gt;</span>
    )
  }
}
