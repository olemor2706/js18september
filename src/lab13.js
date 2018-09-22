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

function task7799(mass, aDeg){
	if (mass <= 0){
		var e = new Error ("Масса должна быть положительной");
		throw e;
	}
	var g = 9.8067;
	var force = mass * g * Math.cos(aDeg/180*Math.PI);
	return force.toFixed(6);
}

function task9354(a, b, c){
	var e;
	if (a == 0){
		e = new Error ("Уравнение y=0x^2+"+b+"x+"+c+" не является квадратным");
		throw e;
	}
	var discriminant = b*b - 4*a*c;
	return discriminant.toFixed(4);
}

function task5170(y){
	if (y <= 0){
		e = new Error ("Значение Y должно быть положительным");
		throw e;
	}
	var isSimple = true;
	if (y%2 == 0) {
		// Исключаем все четные числа
		isSimple = false;
	}
	else{
		// Цикл по нечетным числам от 3 и более
		var i = 3;
		var j = Math.floor(y/2);
		while (i < j){
			if (y % i == 0){
				// число не простое
				isSimple = false;
				break;
			}
			j = Math.floor(y/i);
			i += 2;
		}
	}
	console.log(isSimple ? 'число простое' : 'число не простое');
	return isSimple;
}

