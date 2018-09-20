function task9020(x){
	if (x>61){
		var e = new Error ("Подкоренное выражение должно быть неотрицательным");
		throw e;
	}
	return 3* Math.sqrt(61-x);
}


function task3943(x, y){
	var e;
	var z;
	if (y < 0){
		e = new Error ("Значение y должно быть неотрицательным");
		throw e;
	}
	z = x + Math.sqrt(y);
	if (z < 0){
		e = new Error ("Подкоренное выражение должно быть неотрицательным");
		throw e;
	}
	return (-5 * Math.sqrt (z));
}

