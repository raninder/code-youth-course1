const student = [
	{
	firstname: "Brenda",
	lastname: "smith",
	age:23
	},
	{
		firstname: "Deng",
		lastname: "Mading",
		age:20	
	},
	{
		firstname: "Steven",
		lastname: "Mading",
		age:20	
	}
];
for(let i=0;i<student.length;i++){
	console.log(student[i].firstname);
}
for(let item of student){
	console.log(item);
}