	var mx = 5;
	var my = 5;
	var p=3;

function Enemy(x,y){
	this.x = x;
	this.y = y;
	this.v = 5;
	
	
}
Enemy.prototype.draw = function (){
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.angle);
	
	context.fillStyle = "blue";
	context.beginPath();
	context.arc(0,0,30,0,2*Math.PI);
	context.fill();
	
	
	
	context.restore();
	
	this.x += mx;
	this.y += my;
	
	if( this.x - 30 <0  || this.x + 30>canvas.width){
		mx=-mx;
	}	
	if(this.y - 30 <0 || this.y + 30>canvas.height){ 
		my=-my;
	}
	
	rx = this.x - tank.x;
	ry = this.y - tank.y;
			
	if (60 > Math.sqrt((rx*rx)+(ry*ry))) {
		console.log("prekrivanje");
		score -= 5;
		
		enemy.reset();
		console.log(mx,my);
		
	}
	
}



Enemy.prototype.reset = function(){
	
    this.x = 32 + (Math.random() * (canvas.width - 64));
	this.y = 32 + (Math.random() * (canvas.height - 64));
	my=5;
	mx=5;
}
