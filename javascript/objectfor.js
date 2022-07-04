const student = {
	name:"John",
	// key     student[key]
	email:"abc@gmail.com",
	phone: [1234567822,7687676987];
	// address:{
	// 	city:"Toronto",
	// 	country:"Canada"
	// }
}
//array for loops
// let arr1 = [2,5,7,22,8];
// for(let i=0;i<arr1.length;i++){
// 	console.log(arr1[i]);
// }
// for(let item of arr1){
// 	console.log(item+10);
// }
// student["name"]
// student.name

//object for loop
for(let key in student){
	console.log(key,"=>",student[key]);
	}


//object for nested loop
for(let key in student){
	//nested object			'array'
	if(typeof student[key] == 'object'){
		for(let akey in student[key]){
			console.log(akey,'=>',student[key][akey]);
		}
	}
	else{
	console.log(key,"=>",student[key]);
	}
}

//check if ele is an array
Array.isArray(arr1);
if(Array.isArray(student[key]))