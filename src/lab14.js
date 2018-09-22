function distanceBetweenInts(xa, ya, xb, yb){
	var result = Math.sqrt(Math.pow(xb-xa,2) + Math.pow(yb-ya,2));
	return result;
}

function distanceBetweenObjects(a, b){
	var result = Math.sqrt(Math.pow(b.x - a.x,2) + Math.pow(b.y - a.y,2));
	return result;
}


function Point (x, y){
	this.x = x;
	this.y = y;
}

Point.prototype = {
	distanceTo: function (p){
		var dx = this.x - p.x;
		var dy = this.y - p.y;
		return Math.sqrt(dx*dx + dy*dy);
	}
}

function hasIntersectionInts(leftA, leftB, rightA, rightB){
	if (leftA > leftB || rightA > rightB){
		var e = new Error ("Значение A должно быть меньше значения B");
		throw e;
	}
	console.log(!(leftA > rightB || leftB < rightA) ? "пересекаются" : "не пересекаются");
	return !(leftA > rightB || leftB < rightA);
}

function hasIntersectionObjects(leftPoint, rightPoint){
	if (leftPoint.a > leftPoint.b || rightPoint.a > rightPoint.b){
		var e = new Error ("Значение A должно быть меньше значения B");
		throw e;
	}
	console.log(!(leftPoint.a > rightPoint.b || leftPoint.b < rightPoint.a) ? "пересекаются" : "не пересекаются");
	return !(leftPoint.a > rightPoint.b || leftPoint.b < rightPoint.a);
}


function Range (x, y){
	this.a = x;
	this.b = y;
}

Range.prototype = {
	intersects: function (x){
		return !(this.a > x.b || this.b < x.a);
	}
}