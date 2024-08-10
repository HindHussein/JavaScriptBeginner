import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10).toFixed(2);
console.log(`${circumference}cm`);


const area = getArea(10).toFixed(2);
console.log(`${area}cm^2`);


const volume = getVolume(10).toFixed(2);
console.log(`${volume}cm^3`);