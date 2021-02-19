class Slingshot{
constructor(bodyA,bodyB){
var options= {
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:.01, length:50
    
}
this.slingshot=Matter.Constraint.create(options);
World.add(world, this.slingshot);
}

display(){
strokeWeight(5);
line(this.slingshot.bodyA.position.x,this.slingshot.bodyB.position.y,this.slingshot.bodyB.position.x,this.slingshot.bodyB.position.y);
}
}