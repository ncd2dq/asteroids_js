//Describes the spaceship class

function SpaceShip(){
    this.tip_x = 300;
    this.tip_y = 300;
    this.ship_momentum = new Vector(0, 0);
    
    this.create_vertices = function(tip_x, tip_y){
        //Returns Trangle Vertices: Tip, BL, BR as tuples in an array
        let BL_x = tip_x - Ship_Radius;
        let BL_y = tip_y + Ship_Height;
        let BR_x = tip_x + Ship_Radius;
        let BR_y = tip_y + Ship_Height;
        let final_points = [[tip_x, tip_y],
                           [BL_x, BL_y], 
                           [BR_x, BR_y]
                           ];
        
        return final_points;
    }
    
    //All of the ships other point are stored in this list
    this.ship_vertices = this.create_vertices(this.tip_x, this.tip_y);
    
    this.show = function(){
        //Draw body of ship
        triangle(this.ship_vertices[0][0], this.ship_vertices[0][1],
                this.ship_vertices[1][0], this.ship_vertices[1][1],
                this.ship_vertices[2][0], this.ship_vertices[2][1]);
        
        //Draw ship weapons as half way points between tip and bottom pieces
        //vector.mid_point(other);
        let tip = new Vector(this.ship_vertices[0][0], this.ship_vertices[0][1]);
        let BL = new Vector(this.ship_vertices[1][0], this.ship_vertices[1][1]);
        let BR = new Vector(this.ship_vertices[2][0], this.ship_vertices[2][1]);
        
        let gun_1_base = tip.mid_point(BL);
        let gun_2_base = tip.mid_point(BR);
        
        //Calculate the tip of the gun by using sin/cos to make a triangle on the side
        //of the ship, otherwise the guns wont rotate with the whole ship
        //line();
        //line();
        
    }
    
    this.boost = function(acceleration_vector){
        this.ship_momentum = this.ship_momentum.add(acceleration_vector);
    }
    
    this.find_ship_facing_direction = function(){
        //Modify the BL point to be directly behind the tip then find
        //The vector between them
        //Then get that vectors unit direction
        let BL_x = this.ship_vertices[1][0];
        let BL_y = this.ship_vertices[1][1];
        BL_x += Ship_Radius;
        
        back_vector = new Vector(BL_x, BL_y);
        tip_vector = new Vector(this.tip_x, this.tip_y);
        let direction = tip_vector.sub(back_vector);
        direction = direction.unit_direction();
        
        return direction;
    }
    
    this.update = function(){
        this.tip_x += this.ship_momentum.x;
        this.tip_y += this.ship_momentum.y;
        
        this.ship_vertices = this.create_vertices(this.tip_x, this.tip_y);
    }
    
    this.run = function(){
        this.update();
        this.show();
    }
}
