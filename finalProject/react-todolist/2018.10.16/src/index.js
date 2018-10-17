// console.log(1)


import _ from 'lodash';
import {aTriple,fangfang} from '../myJS.js';

function component() {
	let element = document.createElement('div');

	//Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello','webpack'],' ')+" "+aTriple(3);

	return element;
}

document.body.appendChild(component());
console.log(aTriple(10));
console.log(fangfang());
console.log(fangfang);
