const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;
const Util = require("./util.js");
window.Util = Util;
const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    rock = new Asteroid();
    rock.draw(ctx);
});