import React from 'react';
import ReactDom from 'react-dom';
import Pagination from './components/pagination.js';
import Store from '../store/store.js'
require('../css/styleCss.css')

const paginationOpt = {
  current : 1,
  pageSize : 10,
  changeCallback : function(currentPage){
    console.log('当前请求第'+currentPage+'页')
  },
  total : 50,
  groupCount : 5,
  arrows : true
};

ReactDom.render(<Pagination
    current={paginationOpt.current}
    pageSize={paginationOpt.pageSize}
    changeCallback={paginationOpt.changeCallback}
    total={paginationOpt.total}
    groupCount={paginationOpt.groupCount}
    arrows={paginationOpt.arrows}
  />,document.getElementById('example'))
