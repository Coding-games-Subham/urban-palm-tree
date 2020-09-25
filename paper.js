class Paper{
    constructor(){
        var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
        this.body = Bodies.circle(200, 450 ,20,options);
        
        
        World.add(world, this.body);

    }
    display(){
        fill("orange");

        var pos=this.body.position
    
    ellipse(pos.x, pos.y , 20 , 20); 
    }
    }
    