function Tank(x,y){
	this.x = x;
	this.y = y;
	this.v = 5;
	this.angle;
	this.fires = [];
	
}
Tank.prototype.draw = function (){
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.angle);
	
	context.fillStyle = "green";
	context.beginPath();
	context.arc(0,0,30,0,2*Math.PI);
	context.fill();
	
	context.fillStyle = "red";
	context.fillRect(0, -10, 50, 20);
	
	context.restore();
	
	for (var i=0; i<this.fires.length; i++)
		this.fires[i].draw();
	
}
Tank.prototype.update = function(input, mouseX, mouseY){
	if (input.left) this.x = this.x - this.v;
	if (input.right) this.x = this.x + this.v;
	if (input.up) this.y = this.y - this.v;
	if (input.down) this.y = this.y + this.v;
	
	if( this.x - 30 <0 ){
		this.x = 30
	}
	if(this.x + 30>canvas.width){
		this.x = canvas.width-30
		
	}
	
	if(this.y + 30>canvas.height){
		this.y = canvas.height-30;
	}
	if(this.y - 30 <0){ 
		this.y = 30;
	}
	
	
	
	var dx = mouseX - this.x;
	var dy = mouseY - this.y;
	this.angle = Math.atan2(dy,dx);
	
	for (var i=0; i<this.fires.length; i++)
		this.fires[i].update(
	);
	
	
	
}
Tank.prototype.fire = function (){
	var dx = Math.cos(this.angle);
	var dy = Math.sin(this.angle);
	var f = new Fire(this.x, this.y, dx, dy);
	this.fires.push(f);
	
	
}