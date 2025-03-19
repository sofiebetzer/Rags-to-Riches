let characterX = 50
let characterY = 480
let speed = 5
let hastighedY = 0
let gravity = 1
let isHop = false

function setup() {
	createCanvas(1400, 600);
}

function draw(){
background(135,206,235) 

fill(255,176,39)
ellipse(589, 10, 150, 150)

if (characterY < 480){
	hastighedY += gravity
} else {
	characterY = 480
	hastighedY = 0
	isHop = false
}

characterY += hastighedY

keyPressed()
character()


}
function character() {
	fill(205,176,39)
	rect(characterX, characterY, 60, 80)
}

function keyPressed() {
if (keyIsDown(87)){characterY--}
if (keyIsDown(65)){characterX--}
if (keyIsDown(68)){characterX++}

}

 




