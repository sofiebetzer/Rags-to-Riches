let characterX = 50
let characterY = 480
let speed = 5
let hastighedY = 0
let gravity = 0.2
let isHop = false

function setup() {
	createCanvas(1400, 600);
}

function draw(){
background(135,206,235) 

fill(255,176,39)
ellipse(589, 10, 150, 150)

characterY += hastighedY
if (characterY < 480){
	hastighedY += gravity
} else {
	characterY = 480
	hastighedY = 0
	isHop = false
}



keyPressed()
character()


}
function character() {
	fill(205,176,39)
	rect(characterX, characterY, 60, 80)
}

function keyPressed() {
if (keyIsDown(32) && !isHop) {
	hastighedY = -12
	isHop = true
}


if (keyIsDown(65)){characterX -=speed}

if (keyIsDown(68)){characterX +=speed}


}

 




