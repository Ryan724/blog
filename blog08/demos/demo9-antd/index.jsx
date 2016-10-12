import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo1';
const demoList = {
  dataMap: {
    levelAlias_0: '0',
    levelAlias_1: '1111',
    levelAlias_2: '22222',
  },
  dataLength: 3,
};
ReactDOM.render(<Demo demoList ={demoList}/>, document.querySelector('#content'));
