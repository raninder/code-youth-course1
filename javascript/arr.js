let arr1=[2,3,4,5,6];
console.log(typeof arr1);
let arr2 = [];
let count=0;
for(let i=0;i<arr1.length;i++){
	console.log(arr1[i]*arr1[i]);   // ==    value     === value data type
	if(arr1[i]%2==0){
			count++;   //1  2   5
	}
}