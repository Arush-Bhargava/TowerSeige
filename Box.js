class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity = 255;
  }
  display() {
    rectMode(CENTER);
    
    if (this.body.speed < 5) {
      var pos = this.body.position;
      fill("lime");
      rect(pos.x, pos.y, this.width, this.height);
    } else {
      push();
      World.remove(world, this.body);
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      pop();
    }
  }
}
