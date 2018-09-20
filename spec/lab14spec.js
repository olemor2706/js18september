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
	

