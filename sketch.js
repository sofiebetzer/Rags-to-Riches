let fattig
let flip
let city
let money
let characterX = 10
let characterY = 515
let speed = 5
let hastighedY = 0
let gravity = 0.32
let isHop = false
let hop = 0
let coinCollected = false
let score = 0
let coins = [
	{x:250, y:400, collected: false},
	{x:320, y:400, collected: false},
	{x:600, y:300, collected: false},
	{x:900, y:515, collected: false},
	{x:1200, y:450, collected: false},
	{x:400, y:380, collected: false},	
]

function preload(){
	fattig = loadImage("Fattig1.png")
	city = loadImage("BY.jpg")
	flip = loadImage("Fattig-flip.PNG")
	money = loadImage("Money.png")
}

function setup() {
	createCanvas(1475, 600)
}

function draw(){
image(city,0,0,1475,600) 

fill(0)
textSize(24)
text("score: " + score,20,40)




characterY += hastighedY
hop += 0.2
console.log(hastighedY)
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
fill(150,75,0)
rect(200,450,400,20)


character()
keyPressed()
coin()



if(characterX + 60 > 200 && characterX < 600
	&& characterY + 60 > 450 && characterY + 60 < 470 &&
	hastighedY >= 0
){
	characterY = 450 - 60
	hastighedY = 0
	isHop = false
	}

}


function character() {
	

	if (keyIsDown(68)){
	image(fattig, characterX, characterY, 90, 60)} 
	else if (keyIsDown(65)){ image(flip,characterX,characterY,90,60)
	} else { image(fattig, characterX, characterY, 90, 60)
	}
}

function coin(){
	for (let i = 0; i < coins.length; i++){
		let c = coins[i]
		if(!c.collected){
			image(money,c.x, c.y, 20, 20)
		}
	}
}

function keyPressed() {
if (keyIsDown(32) && !isHop) {
	hastighedY = -10
	hop = -1
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