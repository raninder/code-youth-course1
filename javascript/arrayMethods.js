let color = ["green", "purple", "white", "black","cyan", "aqua", "brown"];

//push method - add element to end of an array
color.push("grey");
console.log("push",color); 

//pop - remove last element

let ele = color.pop();
console.log("deleted element", ele);
console.log("pop",color); 

//unshift - add element to start of an array
color.unshift("pink");
console.log("unshift",color); 

// shift- remove first element
let item = color.shift();
console.log("shift:",color); 

//slice - part of an array   arr.slice(start,end) start to end-1
let slicedArr = color.slice(1,4); 
console.log("slice:",slicedArr); 

//sort
let sortedArr = color.sort();
let numbers = [5, 7,12, 67,34, 10];   //34 10 >0 
console.log("sort",sortedArr); 
console.log("sort numbers1",numbers.sort()); 
let sortNum = numbers.sort(function(a,b){
	return a-b;
})
// let sortNum1 = numbers.sort((a,b) => a-b);
console.log("sort numbers2",sortNum); 

//reverse
let reversedArr = color.reverse();
console.log("reversed",reversedArr );