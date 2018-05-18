import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class PaginationBox extends Component{
  constructor(props){
      super(props);
  }

  handleClick(i){
    let option = i + 1 - this.props.nowLocal;
    this.props.turn(option);
  }

  render(){

    let { nowLocal,total,pageSize } = this.props;
    let boxLength = Math.ceil(total/pageSize),
        paginationBoxList = [];

    for(let i = 0;i < boxLength;i++){
        paginationBoxList.push(<li
                                  onClick={this.handleClick.bind(this,i)}
                                  key={i}
                                  className={"paginationBox " + (i+1 == nowLocal?'active': '')}>{i+1}
                                </li>)
    }

    return(
        <ul className="PaginationUl">
          {paginationBoxList}
        </ul>
    )
  }
}
