let Ship_Height = 45;
let Ship_Radius = 18;
let Ship_Gun_Length = 5;

let Canvas_Width = 600;
let Canvas_Height = 600;

let ship = new SpaceShip();

let bullets = [];
let asteroids = [];
let asteroid_count = 5;

let theta = 0;
let theta_change = 0;

function setup() {
    createCanvas(Canvas_Width, Canvas_Height);
    //Add asteroids
    for(let i = 0; i < asteroid_count; i++){
        asteroids.push(new Asteroid(Canvas_Width, Canvas_Height));
    }
}


function draw() {
    background(255, 0, 255);
    ship.run(theta);
    
    //Display asteroids
    if(asteroids.length != 0){
        for(let i = 0; i < asteroids.length; i++){
            asteroids[i].run();
        }
    }
    
    //Display bullets
    if(bullets.length != 0){
        for(let i = 0; i < bullets.length; i++){
            bullets[i].run();
        }
    }
    //No longer display bullets if they run out of fuel or hit an asteroid
    if(bullets.length != 0){
        for(let i = 0; i < bullets.length; i++){
            if(bullets[i].fuel <= 0){
                bullets.splice(i, 1);
            }
        }
    }
    
    theta += theta_change;
}


// User input
function keyPressed(){
    if (keyCode === LEFT_ARROW){
        //direction = [-1, 0];
        theta_change = -5;
        
    } else if (keyCode === RIGHT_ARROW){
        //direction = [1, 0];
        theta_change = 5;
        
    } else if (keyCode === DOWN_ARROW){
        acceleration_vector = ship.find_ship_facing_direction();
        acceleration_vector = acceleration_vector.mult(-1);
        ship.boost(acceleration_vector);
        
    } else if (keyCode === UP_ARROW){
        acceleration_vector = ship.find_ship_facing_direction();
        ship.boost(acceleration_vector);
    } else if (keyCode == 32){
        bullet = ship.shoot();
        bullets.push(bullet);
    }
}

function keyReleased(){
    if (keyCode === LEFT_ARROW){
        //direction = [-1, 0];
        theta_change = 0;
        
    } else if (keyCode === RIGHT_ARROW){
        //direction = [1, 0];
        theta_change = 0;
    }
}
