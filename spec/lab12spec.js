it ("test 4411", function () {
	var result = task4411(11.13);
	expect(result).toBeCloseTo(18.13, 4);
	result = task4411(-7919);
	expect(result).toBeCloseTo(-7912, 4);
	result = task4411(0);
	expect(result).toBeCloseTo(7, 4);
})
	
it ("test 2790", function () {
	var result = task2790(6997);
	expect(result).toBeCloseTo(0.9205, 4);
	result = task2790(31);
	expect(result).toBeCloseTo(0.8572, 4);
	result = task2790(90);
	expect(result).toBeCloseTo(0, 4);
	result = task2790(0);
	expect(result).toBeCloseTo(1, 4);
	result = task2790(180);
	expect(result).toBeCloseTo(1, 4);
})

it ("test 3946", function () {
	var arr1 = [1,2,3,4,1];
	var result = task3946(arr1);
	expect(result).toBeCloseTo(2.2, 4);
	
	var arr2 = [1, 2, 3, 4, 1, 3, 4, 4, 4, 4];
	var result = task3946(arr2);
	expect(result).toBeCloseTo(3, 4);
})