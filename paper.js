class paper
{
    constructor(x,y)
    {
        var options =
        {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1
        }
    
     this.body=Bodies.rectangle(x,y,30,30,options)
     World.add(world,this.body)
     this.image=loadImage("paper.png")
     
    
    
    }
   
   display()
   {	

    push()
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER)
    image(this.image,0,0,30,30);
    pop()

   }

}