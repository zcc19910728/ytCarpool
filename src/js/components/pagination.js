import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import PaginationBox from './pagination_box.js';
import PaginationArrowLeft from './pagination_arrow_left.js';
import PaginationArrowRight from './pagination_arrow_right.js';
require('../../css/styleCss.css')

export default class Pagination extends Component{
  constructor(props){
    super(props);
    this.state = {
      nowLocal : null || this.props.current
    }
  }

  turn(n){
    let _n = n + this.state.nowLocal;
    let {  total,pageSize } = this.props;

    if(_n == 0 || _n > Math.ceil(total/pageSize)){
      return;
    }

    this.props.changeCallback && this.props.changeCallback(_n);

    this.setState({
      nowLocal:_n
    })
  }

  render(){

    let { current,pageSize,changeCallback,total,groupCount,arrows } = this.props;
    let arrowLeftNode =  arrows?<PaginationArrowLeft turn={this.turn.bind(this)}/>: null;
    let arrowRightNode =  arrows?<PaginationArrowRight turn={this.turn.bind(this)}/>: null;

    return(
      <div>
        {arrowLeftNode}
        <PaginationBox turn={this.turn.bind(this)} nowLocal={this.state.nowLocal} total={this.props.total} pageSize={this.props.pageSize} />
        {arrowRightNode}
      </div>
    )
  }
}

Pagination.defaultProps = {
  current : 1,
  pageSize : 10,
  changeCallback : null,
  total : 10,
  groupCount : 5,
  arrows : true
};
