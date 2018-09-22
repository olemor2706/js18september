it ("вычисление расстояния между точками. Координаты заданы 4 числами", function () {
	var result = distanceBetweenInts(1, 1, 3, 4);
	expect(result).toBeCloseTo(3.6056, 4);
	
	result = distanceBetweenInts(-2, 4, 8, -10);
	expect(result).toBeCloseTo(17.2046, 4);
	
	result = distanceBetweenInts(0, 0, -5, -7);
	expect(result).toBeCloseTo(8.6023, 4);
	
	result = distanceBetweenInts(0, 0, 0, 0);
	expect(result).toBeCloseTo(0, 4);
	
	result = distanceBetweenInts(-1, -3, 2, 9);
	expect(result).toBeCloseTo(12.3693, 4);
})

it ("вычисление расстояния между точками. Координаты заданы 4 числами", function () {
	var a = {x:1, y:1};
	var b = {x:3, y:4};
	var result = distanceBetweenObjects(a, b);
	expect(result).toBeCloseTo(3.6056, 4);
	
	result = distanceBetweenObjects( {x: -2, y: 4}, {x:8, y: -10});
	expect(result).toBeCloseTo(17.2046, 4, 4);
})	

it ("вычисление расстояния от одной точки до другой. Координаты другой точки заданы 2 числами", function () {
	var a = {
		x:1,
		y:1,
		distanceTo: function(x, y){
			var dx = this.x - x;
			var dy = this.y - y;
			return Math.sqrt(dx*dx + dy*dy);
		}
			
	};
	var result = a.distanceTo(3, 4);
	expect(result).toBeCloseTo(3.6056, 4);
	
	a.x = -2;
	a.y = 4;
	result = a.distanceTo( 8, -10);
	expect(result).toBeCloseTo(17.2046, 4);
})	


it ("вычисление расстояния от одной точки до другой. Координаты другой точки заданы 1 объектом", function () {
	var a = {
		x:1,
		y:1,
		distanceTo: function(b){
			var dx = this.x - b.x;
			var dy = this.y - b.y;
			return Math.sqrt(dx*dx + dy*dy);
		}
			
	};
	
	var b = {
		x:3,
		y:4,
	};
	
	var result = a.distanceTo(b);
	expect(result).toBeCloseTo(3.6056, 4);
	
	a.x = -2;
	a.y = 4;
	b.x = 8;
	b.y = -10;
	result = a.distanceTo(b);
	expect(result).toBeCloseTo(17.2046, 4);
	
	a = new Point (1, 1);
	b = new Point (3, 4);
	
	result = a.distanceTo(b);
	expect(result).toBeCloseTo(3.6056, 4);
	
	result = b.distanceTo(a);
	expect(result).toBeCloseTo(3.6056, 4);
})	
	
it ("проверка пересечения интервалов. Границы заданы 4 числами", function () {
	var result = hasIntersectionInts(2, 3, 5, 7);
	expect(result).toBeFalsy();
	
	result = hasIntersectionInts(11, 17, 13, 19);
	expect(result).toBeTruthy();
	
	result = hasIntersectionInts(23, 37, 29, 31);
	expect(result).toBeTruthy();
	
	result = hasIntersectionInts(5, 15, 0, 30);
	expect(result).toBeTruthy();
	
	result = hasIntersectionInts(67, 71, 59, 61);
	expect(result).toBeFalsy();
	
	var e = new Error ("Значение A должно быть меньше значения B");
	var f = function () {hasIntersectionInts(79, 73, 83, 89)};
	expect(f).toThrow(e);
	
	f = function () {hasIntersectionInts(97, 101, 107, 103)};
	expect(f).toThrow(e);
})

it ("проверка пересечения интервалов. Границы заданы 2 объектами", function () {
	var x1 = {a:2, b:3};
	var x2 = {a:5, b:7};
	var result = hasIntersectionObjects(x1, x2);
	expect(result).toBeFalsy();
	
	x1 = {a:11, b:17};
	x2 = {a:13, b:19};
	result = hasIntersectionObjects(x1, x2);
	expect(result).toBeTruthy();
	
	x1 = {a:23, b:37};
	x2 = {a:29, b:31};
	result = hasIntersectionObjects(x1, x2);
	expect(result).toBeTruthy();
	
	x1 = {a:5, b:15};
	x2 = {a:0, b:30};
	result = hasIntersectionObjects(x1, x2);
	expect(result).toBeTruthy();
	
	x1 = {a:67, b:71};
	x2 = {a:59, b:61};
	result = hasIntersectionObjects(x1, x2);
	expect(result).toBeFalsy();
	
	x1 = {a:79, b:73};
	x2 = {a:83, b:89};
	var e = new Error ("Значение A должно быть меньше значения B");
	var f = function () {hasIntersectionObjects(x1, x2)};
	expect(f).toThrow(e);
	
	x1 = {a:97, b:101};
	x2 = {a:107, b:103};
	f = function () {hasIntersectionObjects(x1, x2)};
	expect(f).toThrow(e);
})

it ("проверка пересечения одного интервала с другим. Границы другого интервала заданы 2 числами", function () {
	var leftPoint = {
		a: 2, 
		b: 3,
		intersects: function (a, b){
			return !(this.a > b || this.b < a);
		}
	};
	var rightA = 5;
	var rightB = 7;
	var result = leftPoint.intersects(rightA, rightB);
	expect(result).toBeFalsy();
	
	leftPoint.a = 11;
	leftPoint.b = 17;
	rightA = 13;
	rightB = 19;
	result = leftPoint.intersects(rightA, rightB);
	expect(result).toBeTruthy();
	
	leftPoint.a = 23;
	leftPoint.b = 37;
	rightA = 29;
	rightB = 31;
	result = leftPoint.intersects(rightA, rightB);
	expect(result).toBeTruthy();
	
	leftPoint.a = 5;
	leftPoint.b = 15;
	rightA = 0;
	rightB = 30;
	result = leftPoint.intersects(rightA, rightB);
	expect(result).toBeTruthy();
	
	leftPoint.a = 67;
	leftPoint.b = 71;
	rightA = 59;
	rightB = 61;
	result = leftPoint.intersects(rightA, rightB);
	expect(result).toBeFalsy();
	
	leftPoint.a = 79;
	leftPoint.b = 73;
	rightA = 83;
	rightB = 89;
	/*var e = new Error ("Значение A должно быть меньше значения B");
	var f = function () {leftPoint.intersects(rightA, rightB)};
	expect(f).toThrow(e);*/
	
	leftPoint.a = 97;
	leftPoint.b = 101;
	rightA = 107;
	rightB = 103;
	/*f = function () {leftPoint.intersects(rightA, rightB)};
	expect(f).toThrow(e);*/
})


it ("проверка пересечения одного интервала с другим. Границы другого интервала заданы 1 объектом", function () {
	var leftPoint = {
		a: 2, 
		b: 3,
		intersects: function (point){
			return !(this.a > point.b || this.b < point.a);
		}
	};
	var rightPoint = {
		a: 5, 
		b: 7,
	};
	
	
	var result = leftPoint.intersects(rightPoint);
	expect(result).toBeFalsy();
	
	leftPoint.a = 11;
	leftPoint.b = 17;
	rightPoint.a = 13;
	rightPoint.b = 19;
	result = leftPoint.intersects(rightPoint);
	expect(result).toBeTruthy();
	
	leftPoint.a = 23;
	leftPoint.b = 37;
	rightPoint.a = 29;
	rightPoint.b = 31;
	result = leftPoint.intersects(rightPoint);
	expect(result).toBeTruthy();
	
	leftPoint.a = 5;
	leftPoint.b = 15;
	rightPoint.a = 0;
	rightPoint.b = 30;
	result = leftPoint.intersects(rightPoint);
	expect(result).toBeTruthy();
	
	leftPoint.a = 67;
	leftPoint.b = 71;
	rightPoint.a = 59;
	rightPoint.b = 61;
	result = leftPoint.intersects(rightPoint);
	expect(result).toBeFalsy();
	
	leftPoint.a = 79;
	leftPoint.b = 73;
	rightPoint.a = 83;
	rightPoint.b = 89;
	/*var e = new Error ("Значение A должно быть меньше значения B");
	var f = function () {leftPoint.intersects(rightA, rightB)};
	expect(f).toThrow(e);*/
	
	leftPoint.a = 97;
	leftPoint.b = 101;
	rightPoint.a = 107;
	rightPoint.b = 103;
	/*f = function () {leftPoint.intersects(rightA, rightB)};
	expect(f).toThrow(e);*/
})

it ("вычисление расстояния между точками. Координаты заданы 2 экземплярами прототипа", function () {
	var r1 = new Range (2, 3);
	var r2 = new Range (5, 7);
	var result = r1.intersects(r2);
	expect(result).toBeFalsy();
	result = r2.intersects(r1);
	expect(result).toBeFalsy();
	
	r1 = new Range (11, 17);
	r2 = new Range (13, 19);
	result = r1.intersects(r2);
	expect(result).toBeTruthy();
	result = r2.intersects(r1);
	expect(result).toBeTruthy();
	
	r1 = new Range (23, 37);
	r2 = new Range (29, 31);
	result = r1.intersects(r2);
	expect(result).toBeTruthy();
	result = r2.intersects(r1);
	expect(result).toBeTruthy();
	
	r1 = new Range (5, 15);
	r2 = new Range (0, 30);
	result = r1.intersects(r2);
	expect(result).toBeTruthy();
	result = r2.intersects(r1);
	expect(result).toBeTruthy();
	
	r1 = new Range (67, 71);
	r2 = new Range (59, 61);
	result = r1.intersects(r2);
	expect(result).toBeFalsy();
	result = r2.intersects(r1);
	expect(result).toBeFalsy();
	
	
})