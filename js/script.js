/* 
1 method

import {sum,avg} from './util1.ja';

2 nd method

import {sum as add} from './util.ja'; 
  
3rd method  * as an aliase
*/
import * as fn from './util1.js';

console.log(fn.sum(1,2,3,4));
console.log(fn.avg(1,2,3,4));