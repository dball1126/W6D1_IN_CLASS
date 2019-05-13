const Util = require('./util.js');

function Asteroid(obj) {

    obj = obj || {};
    

    this.COLOR = 'blue';
    this.RADIUS = 10;

    obj.color = this.COLOR;
    obj.radius = this.RADIUS;
    // obj.pos = obj.pos || [30, 30];
    obj.vel = Util.randomVec(4);
    obj.pos = [Math.random(), Math.random()];
    //SHOULD IT BE OBJ OR ASTEROID DEFAULT COLOR
    MovingObject.call(this, obj);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;