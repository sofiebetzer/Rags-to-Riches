let characterX = 10
let characterY = 515
let speed = 5
let hastighedY = 0
let gravity = 0.2
let isHop = false
let coinCollected = false
let coins = [
	{x:250, y:400, collected: false},
	{x:320, y:400, collected: false},
	{x:600, y:300, collected: false},
	{x:900, y:515, collected: false},
	{x:1200, y:450, collected: false}	
]
let score = 0

function setup() {
	createCanvas(1475, 600)
}

function draw(){
background(135,206,235) 

fill(0)
textSize(24)
text("score: " + score,20,40)

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

for (let i = 0; i < coins.length; i++){
	let c = coins[i]
	if (!c.collected){
		if(
			characterX < c.x + 20 &&
			characterX + 60 > c.x &&
			characterY < c.y + 20 &&
			characterY + 70 > c.y
		){
			c.collected = true
			score += 1
		}
	}
}


platform()
keyPressed()
character()
coin()

}

function platform(){
	rect(200,450,400,20)
}

function character() {
	fill(205,176,39)
	rect(characterX, characterY, 60, 70)
}

function coin(){
	for (let i = 0; i < coins.length; i++){
		let c = coins[i]
		if(!c.collected){
			fill(255,223,0)
			ellipse(c.x, c.y, 20, 20)
		}
	}
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