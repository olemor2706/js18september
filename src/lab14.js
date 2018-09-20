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