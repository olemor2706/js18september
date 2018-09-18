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

it ("test 4283", function () {
	var result = task4283(3, [1, 2, 3, 4, 1, 2]);
	expect(result).toBeCloseTo(1, 4);
	
	result = task4283(5, [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3]);
	expect(result).toBeCloseTo(0, 4);
	
	result = task4283(2, [3, 2, 2, 2, 2, 2]);
	expect(result).toBeCloseTo(5, 4);
	
	result = task4283(1, [4, 4, 4, 4, 4, 4]);
	expect(result).toBeCloseTo(0, 4);
})

it ("test 6497", function () {
	var result = task6497('9 8 9 1 1 5 1 1');
	expect(result).toEqual('4,6250  3,6250  4,6250  3,3750  3,3750  0,6250  3,3750  3,3750');
	
	result = task6497('5 5 5 5 5');
	expect(result).toEqual('0,0000  0,0000  0,0000  0,0000  0,0000');
	
	result = task6497('');
	expect(result).toEqual('');
	
	result = task6497('1000000 1 1');
	expect(result).toEqual('666666,0000  333333,0000  333333,0000');
})

it ("в задаче 9774 должен получиться корректный результат", function () {
	var data1 = [9, 8, 7, 6, 5, 4];
	task9774(31, data1);
	expect(data1).toEqual([279, 248, 217, 186, 155, 124]);
	
	var data2 = [9, 8, 7, 6, 5, 4];
	task9774(-3, data2);
	expect(data2).toEqual([-27, -24, -21, -18, -15, -12]);
	
	var data3 = [98, 76, 54];
	task9774(11, data3);
	expect(data3).toEqual([1078, 836, 594]);
	
	var data4 = [];
	task9774(11, data4);
	expect(data4).toEqual([]);
})

it ("в задаче 9271 должен получиться корректный результат", function () {
	var data1 = [5, 4, 6, 2, 3, 1];
	task9271(data1);
	expect(data1).toEqual([4, 3, 5, 1, 2, 0]);
	
	var data2 = [1, 2, 3, 4, 1, 2];
	task9271(data2);
	expect(data2).toEqual([0, 1, 2, 3, 0, 1]);
	
	var data3 = [3, 4, 1, 2, 3, 4, 1, 2, 3, 1, 2];
	task9271(data3);
	expect(data3).toEqual([2, 3, 0, 1, 2, 3, 0, 1, 2, 0, 1]);
	
	var data4 = [4, 2, 3, 4, 3, 2];
	task9271(data4);
	expect(data4).toEqual([2, 0, 1, 2, 1, 0]);
	
	var data5 = [4, 4, 4, 4, 4, 3, 2, 1];
	task9271(data5);
	expect(data5).toEqual([3, 3, 3, 3, 3, 2, 1, 0]);
	
	var data6 = [4, 4, 4, 4];
	task9271(data6);
	expect(data6).toEqual([0, 0, 0, 0]);
	
	var data7 = [4, 3];
	task9271(data7);
	expect(data7).toEqual([1, 0]);
})

it ("в задаче 4847 должен получиться корректный результат", function () {
	expect(task4847(31, 59, 83)).toBeFalsy();
	expect(task4847(19, 19, 41)).toBeTruthy();
	expect(task4847(7, 11, 11)).toBeTruthy();
	expect(task4847(67, -67, 67)).toBeTruthy();
	expect(task4847(1, 1, 1)).toBeTruthy();
})

it ("в задаче 6740 должен получиться корректный результат", function () {
	expect(task6740(2, -3)).toBeFalsy();
	expect(task6740(2, -1)).toBeTruthy();
	expect(task6740(4, -1.5)).toBeFalsy();
	expect(task6740(5, 5)).toBeFalsy();
	expect(task6740(1.1, -2)).toBeTruthy();
})