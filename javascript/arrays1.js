let a=4;
let arr4 = [];
let arr5 = [2];

let arr2 = ["red","green", "blue","black" ];
let arr3 = ["hello", true, 12.5, 78, false, "john"];
let arr1 = [2,4,5,6,2,8,9];
console.log("array size", arr1.length);  //no. of array elements

//accessing array elements
console.log(arr1[0]);  //2
console.log(arr1[4]);
console.log(arr1[arr1.length-1]);

//counting even elements
let count=0;
//for to access all array elements
for(let i=0;i<arr1.length;i++){
	console.log(arr1[i]);   // ==    value     === value data type
	if(arr1[i]%2==0){
			count++;   //1  2   5
	}
}
console.log("number of even elements", count);