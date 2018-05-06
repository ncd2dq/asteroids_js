let Ship_Height = 45;
let Ship_Radius = 18;
let Ship_Gun_Length = 5;

let Canvas_Width = 600;
let Canvas_Height = 600;

let ship = new SpaceShip();

function setup() {
    createCanvas(Canvas_Width, Canvas_Height);
}


function draw() {
    background(255, 0, 255);
    ship.run();
}


// User input
function keyPressed(){
    if (keyCode === LEFT_ARROW){
        //direction = [-1, 0];
        console.log('Hayley is hot');
        
    } else if (keyCode === RIGHT_ARROW){
        //direction = [1, 0];
        console.log('Hayley is smart');
        
    } else if (keyCode === DOWN_ARROW){
        acceleration_vector = ship.find_ship_facing_direction();
        acceleration_vector = acceleration_vector.mult(-1);
        ship.boost(acceleration_vector);
        
    } else if (keyCode === UP_ARROW){
        acceleration_vector = ship.find_ship_facing_direction();
        ship.boost(acceleration_vector);
    }
}
