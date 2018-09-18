function task1860(a){
	console.log('Мы стремимся к ' + a);
}

function task4140(name1, name2){
	console.log('Меня зовут ' + name2 + ", " + name1 + " " + name2 +".");
}

function task4411 (x){
	return x + 7;
}

function task2790 (x){
	return Math.sqrt(1 - Math.pow(Math.sin(x*Math.PI/180), 2));
}

function task3946 (arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}
	return sum/arr.length;
}

function task4283 (x, arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == x) sum++;
	}
	return sum;
}

function task6497 (x){
	if (x == '') {return '';}
	var arr = x.split(' ');
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += parseInt(arr[i]);
	}
	sum = sum / arr.length;
	for (i = 0; i < arr.length; i++){
		arr[i] = Math.abs(arr[i] - sum);
		arr[i] = arr[i].toFixed(4);
	}
	arr.toString();
	return arr.join('  ').replace(/\./g,',');
}

function task9774 (x, arr){
	for (var i = 0; i < arr.length; i++){
		arr[i] *= x;
	}
}

function task9271 (arr){
	var minNum = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[i] < minNum) minNum = arr[i];
	}
	for (i = 0; i < arr.length; i++){
		arr[i] -= minNum;
	}
}

function task4847 (x1, x2, x3){
	return (x1 == x2 || x2 == x3 || x3 == x1);
}

function task6740 (x, y){
	return ((x >= 1 && x <= 3) && (y >= -2 && y <= -1));
}