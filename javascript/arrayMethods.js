let color = ["green", "purple", "white", "black","cyan", "aqua", "brown"];

//push method - add element to end of an array
color.push("grey");
console.log("push",color); 

//pop - remove last element

let ele = color.pop();
console.log("deleted element", ele);
console.log("pop",color); 

//unshift - add element to start of an array
color.unshift("pink", "blue");
console.log("unshift",color); 

// shift- remove first element
let item = color.shift();
console.log("shift:",color); 

//slice - part of an array   arr.slice(start,end) start to end-1
let slicedArr = color.slice(1,4); 
console.log("slice:",slicedArr); 
console.log("original Array",color);

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


console.log(color.includes("white"));
//reverse
let reversedArr = color.reverse();
console.log("reversed",reversedArr );

//splice- to add, remove and replace elements
//remove
// splice(start,count_of_elements_delete,element_to_add) 
console.log("original Array",color);
color.splice(1,2)
let splicedArr1 = color.splice(1,3);
console.log("spliced",splicedArr1 );
console.log("original Array",color);

//add using splice
//splice(start,0,element1,element2,...)
let splicedArr2 = color.splice(2,0,"magenta","teal");
console.log("spliced",splicedArr2 );
console.log("original Array",color);

//replce using splice
let splicedArr3 = color.splice(2,2,"color1");
console.log("spliced",splicedArr3 );
console.log("original Array",color);

let splicedArr4 = color.splice(-2,2,"color2","color3");
console.log("spliced",splicedArr4 );
console.log("original Array",color);

for(let i=0;i<color.length;i++){
	console.log(color[i].length);
}

color.forEach((item) => console.log(item.length));
// color.forEach(function (i){
// 	console.log( i.length);
// } )

const score = [30,23,56,33,77,28];
//filter 
let res= [];
let newScore = score.filter((item) => item>30);
// console.log(newScore);
for(let i=0;i<score.length;i++){
	if(score[i]>30){
			res.push(score[i]);
	}
}
console.log(res);

let sum = score.reduce((result,i) => result+i,0);
console.log("sum of array elements",sum);