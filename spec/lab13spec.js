it ("test 9020", function () {
	var result = task9020(0);
	expect(result).toBeCloseTo(23.4307, 4);
	result = task9020(-9);
	expect(result).toBeCloseTo(25.0998, 4);
	result = task9020(61);
	expect(result).toBeCloseTo(0, 4);
	result = task9020(60);
	expect(result).toBeCloseTo(3, 4);
	
	var e = new Error ("Подкоренное выражение должно быть неотрицательным");
	var f = function () {task9020(62)};
	expect(f).toThrow(e);
	
	f = function () {task9020(7573)};
	expect(f).toThrow(e);
	
	f = function () {task9020(75)};
	expect(f).toThrow(e);
})
	
	
it ("test 3943", function () {
	var result = task3943(-5, 81);
	expect(result).toBeCloseTo(-10.0000, 4);
	
	result = task3943(7507, 7499);
	expect(result).toBeCloseTo(-435.7062, 4);
	
	
	var e = new Error ("Значение y должно быть неотрицательным");
	var f = function () {task3943(7489, -7487)};
	expect(f).toThrow(e);
	
	e = new Error ("Подкоренное выражение должно быть неотрицательным");
	f = function () {task3943(-7481, 7477)};
	expect(f).toThrow(e);
	
})	

it ("test 7799", function () {
	
	var result = task7799(5, 45);
	expect(result).toBeCloseTo(34.671920, 6);
	
	result = task7799(7297, 30);
	expect(result).toBeCloseTo(61972.336135, 6);
	
	result = task7799(10, 90);
	expect(result).toBeCloseTo(0, 6);
	
	result = task7799(7, 91);
	expect(result).toBeCloseTo(-1.198054, 6);
	
	result = task7799(9, 100);
	expect(result).toBeCloseTo(-15.326240, 6);
	
	var e = new Error ("Масса должна быть положительной");
	var f = function () {task7799(0, 30)};
	expect(f).toThrow(e);
	
})	

it ("в задаче 9354 должен получиться корректный результат", function () {
	
	var result = task9354(7, 1, 3);
	expect(result).toBeCloseTo(-83.0000, 4);
	
	result = task9354(7247, 7243, 7229);
	expect(result).toBeCloseTo(-157093203.0000, 4);
	
	result = task9354(-11, -13, -17);
	expect(result).toBeCloseTo(-579.0000, 4);
	
	var e = new Error ("Уравнение y=0x^2+1x+3 не является квадратным");
	var f = function () {task9354(0, 1, 3)};
	expect(f).toThrow(e);
	
	e = new Error ("Уравнение y=0x^2+1000x+2000 не является квадратным");
	f = function () {task9354(0, 1000, 2000)};
	expect(f).toThrow(e);
})	

it ("в задаче 5170 должен получиться корректный результат", function () {
	
	var result = task5170(6);
	expect(result).toBeFalsy();
	
	result = task5170(3219);
	expect(result).toBeFalsy();
	
	result = task5170(7);
	expect(result).toBeTruthy();
	
	result = task5170(2017);
	expect(result).toBeTruthy();
	
	var e = new Error ("Значение Y должно быть положительным");
	var f = function () {task5170(-10)};
	expect(f).toThrow(e);
})	
