function MovingObject(obj) {

    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;

}

MovingObject.prototype.draw = function(ctx){

    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();

};

MovingObject.prototype.move = function() {
    let x = this.pos[0] + this.vel[0];
    let y = this.pos[1] + this.vel[1];

    [this.pos[0], this.pos[1]] = [x, y];
    
};

// obj = MovingObject.

module.exports = MovingObject;