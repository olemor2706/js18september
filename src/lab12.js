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