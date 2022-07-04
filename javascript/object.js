// let arr = [1,2,5,6];
// let arr1 = ["john", "smith", "alex","white"];
// arr1[0]
// arr1[1]
// arr1[arr1.length-1]

//Objects
let person = {
	name:"john",
	"age":20,
	address:{
		city:"Toronto",
		Province:"ontario",
		country:"canada"
	}, 
	phone:["123-456-7892","455-333-2333"]
};
// person["email"] = "abc@123.com";
person.email = "abc@123.com";
console.log(person);
console.log(person.name);
console.log(person["age"]);
console.log("city", person.address.city,person["address"]["Province"]);
console.log("phone",person.phone[0]);
console.log("keys",Object.keys(person));
console.log("values",Object.values(person));
console.log("key values", Object.entries(person));

