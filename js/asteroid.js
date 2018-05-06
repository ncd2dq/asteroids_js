//Describes the asteroid class
let large = 40;
let medium = 23;
let smallish = 13;
let small = 7;

function Asteroid(width, height, size=4){
    let possible_x = [];
    let possible_y = [];
    for(let i = 0; i < width / 3; i++){
        possible_x.push(i);
    }
    for(let i = 0; i < height / 3; i++){
        possible_y.push(i);
    }
    for(let i = width * 2 / 3; i < width; i++){
        possible_x.push(i);
    }
    for(let i = height * 2 / 3; i < height; i++){
        possible_y.push(i);
    }
    this.width = width;
    this.height = height;
    this.x = random(possible_x);
    this.y = random(possible_y);
    
    this.size = size;
    if(this.size == 4){
        this.radius = large;
    } else if (this.size == 3){
        this.radius = medium;
    } else if(this.size == 2){
        this.radius = smallish;
    } else if(this.size ==1){
        this.radius = small;
    }
    let x_dir = random(-2, 2);
    let y_dir = random(-2, 2);
    this.velocity = new Vector(x_dir, y_dir);
    
    this.loop = function(){
        if(this.x >= this.width + this.radius + 1){
            this.x = 0 - this.radius;
        } else if (this.x <= 0 - this.radius - 1){
            this.x = this.width + this.radius;
        } else if (this.y >= this.height + this.radius + 1){
            this.y = 0 - this.radius;
        } else if (this.y <= 0 - this.radius - 1){
            this.y = this.height + this.radius;
        }
    }
    
    this.show = function(){
        ellipse(this.x, this.y, this.radius, this.radius);
    }
    
    this.update = function(){
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
    
    this.run = function(){
        this.update();
        this.show();
        this.loop();
    }
}