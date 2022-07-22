let month=2, year=2022;
switch(month){
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
			num_of_days= 31;
			break;
	case 4:
	case 6:
	case 9:
	case 11:	num_of_days= 30;
						break;

	case 2: if(year%4===0){
			num_of_days= 29;
	}
	else {
		num_of_days= 28;
	}
}

console.log("number of days", num_of_days);