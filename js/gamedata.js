function gameStats(width, height){
    this.score = 0;
    this.level = 1;
    this.width = width;
    this.height = height;
    this.over = "You Crashed!";
    this.new_level = "Next Level!";
    
    this.nextLevel = function(){
        this.level ++;
        textSize(25);
        fill(0, 255, 0);
        text(this.new_level, this.width / 2 - 75, this.height / 2);
    }
    
    this.score_keep = function(){
        textSize(25);
        fill(0, 102, 153);
        text("Score: " + this.score, this.width - 160, 30);
        text("Level: " + this.level, 25, 30);
    }
    
    this.crashed = function(){
        textSize(25);
        fill(255, 0, 0);
        text(this.over, this.width / 2 - 75, this.height / 2);
        text("Final Score Was: " + this.score, this.width / 2 - 75, this.height / 2 + 35);
    }
}

function pass(){
    textSize(score_size);
    fill(0, 102, 153);
    text(score, Canvas_x / 2 - score_size, score_y_offset);  
}


function selfdestruct(){
    location.reload();
}

function endsequence(){
    alert("You clicked on a bomb");
    setTimeout(selfdestruct, 1500);
}

//let difficulty = window.prompt("Please type the desired difficulty level (Case Sensitive)", "Hard, Medium, Easy");