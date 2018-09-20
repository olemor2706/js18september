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
