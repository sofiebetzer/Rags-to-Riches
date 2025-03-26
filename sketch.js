let characterX = 10
let characterY = 515
let speed = 5
let hastighedY = 0
let gravity = 0.2
let isHop = false



function setup() {
	createCanvas(1475, 600)
}

function draw(){
background(135,206,235) 


fill(255,176,39)
ellipse(589, 10, 150, 150)

characterY += hastighedY
if (characterY < 515){
	hastighedY += gravity
} else {
	characterY = 515
	hastighedY = 0
	isHop = false
}


keyPressed()
character()
platform()

}

function platform(){
  let leftWall = 200;
  let rightWall = 300
  line(leftWall, 10, leftWall, 500);
  line(rightWall, 10, rightWall, 500)
	
  let character= constrain(characterX,leftWall,rightWall)
}

function character() {
	fill(205,176,39)
	rect(characterX, characterY, 60, 70)
}

function keyPressed() {

if (keyIsDown(32) && !isHop) {
	hastighedY = -12
	isHop = true
}

if (keyIsDown(65)){
	if (characterX - speed >= 0) {
		characterX -= speed
	} else {
		characterX = 0
	}

}

if (keyIsDown(68)){
	if (characterX + speed <= width - 60){ 
		characterX += speed
	} else {
		characterX = width - 60
	}
}

}