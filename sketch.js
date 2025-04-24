let fattig
let flip
let city
let city2
let money
let bjerg
let characterX = 10
let characterY = 515
let speed = 5
let hastighedY = 0
let gravity = 0.30
let isHop = false
let hop = 0
let gameState = "start"
let coinCollected = false
let score = 0
let level = 1
let levelMessage = ""
let levelCompleted = false
let coins = [
	{x:250, y:400, collected: false},
	{x:320, y:400, collected: false},
	{x:600, y:300, collected: false},
	{x:900, y:215, collected: false},
	{x:1200, y:450, collected: false},
	{x:400, y:380, collected: false},	
]
let level2platforms = [
	{x:150, y: 480, width: 300 , height: 20},
	{x:500, y: 400, width: 300, height: 20},
	{x:900, y: 320, width: 300, height: 20},
	{x:300, y: 250, width: 300, height: 20},
]

function preload(){
	fattig = loadImage("Fattig1.png")
	city2 = loadImage("BY.jpg")
	city = loadImage("Hobo.jpeg")
	flip = loadImage("Fattig-flip.PNG")
	money = loadImage("Coin.png")
	bjerg = loadImage("Mountain.jpg")
}

function setup() {
	createCanvas(1475, 600)
}

function draw(){
if (gameState === "start"){
	startScreen()
} else if (gameState === "play"){
	playGame()
} else if (gameState === "levelComplete"){
	levelCompleteScreen()
} else if (gameState === "level2"){ 
	playLevel2()
} else if (gameState === "gameComplete"){
	gameCompleteScreen()  
}
}

function startScreen(){
	image(bjerg,0,0,1475,600)
	textSize(50)
	textAlign(CENTER)
	text("Welcome to Rags to Riches", width/2, height/2 - 50)
	textSize(24)
	text("Press ENTER to start the game", width/2, height/2 + 50)
	text("Use A and D to move, SPACE to Jump", width/2, height/2 + 10)
}

function levelCompleteScreen(){
	image(city,0,0,1475,600)
	
	fill(255,255,255)
	textSize(32)

	textAlign(CENTER)
	text("Level 1 Complete", width/2, height/2 - 50)
	textSize(24)
	text("Press ENTER for level 2", width/2, height/2 + 20)
}

function gameCompleteScreen(){
	image(city2,0,0,1475,600)

	fill(255,255,255)
	textSize(32)
	textAlign(CENTER)
	text("Game Complete, You Win!!", width/2, height/2 -20)
	textSize(24)
	text("THANKS for playing", width/2, height/2 + 20)
	text("Press R to restart", width/2, height/2 + 60)
}

function playGame(){
image(city,0,0,1475,600) 

fill(255,255,255)
textSize(24)
textAlign(LEFT)
text("score: " + score,20,40)
text("level:"+ level, 20,70)  


characterY += hastighedY
hop += 0.2

if (characterY < 515){
	hastighedY += gravity
} else {
	characterY = 515
	hastighedY = 0
	isHop = false
}

let allCollected = true // til starter siger den at alle mønter er samlet op.
for (let i = 0; i < coins.length; i++){ //går igennem alle mønterr i coins-array.
	let c = coins[i] // laver en konstant som er = den aktuelle mønt i arrayet.
	if (!c.collected){ // hvis denn mønt ikker er samlet endu, så er all collected false fordi den mønt mangler.
		allCollected = false  
		if( //Character kollision tjek
			characterX < c.x + 20 && //Tjekker om characteren er til venstre for møntens højre kant
			characterX + 60 > c.x && //Tjekker om characteren er til højre for møntens venstre kant
			characterY < c.y + 20 && //Tjekker om characteren er over møntens bund
			characterY + 70 > c.y    //Tjekker om characteren er under møntens top
		){
			c.collected = true // Markerer at mønten er samlet op
			score += 1         // pointtælleren øges med 1 pr opsamlet mønt.
		}
	}
}

if (allCollected && level === 1){
	gameState = "levelComplete"
}

fill(150,75,0)
rect(200,450,400,20)
rect(800,350,400,20)

character()
AD()
coin()



if(characterX + 60 > 200 && characterX < 560
	&& characterY + 60 > 450 && characterY + 60 < 470 &&
	hastighedY >= 0
){
	characterY = 450 - 60
	hastighedY = 0
	isHop = false
	}

if(characterX + 60 > 800 && characterX < 1170
	&& characterY + 60 > 350 && characterY + 60 < 370 &&
hastighedY >= 0){
	characterY = 350 - 60
	hastighedY = 0
	isHop = false
}

}

function playLevel2(){
	image(city2,0,0,1475,600)  

	fill(255,255,255)
	textSize(24)
	textAlign(LEFT)
	text("score: " + score, 20,40)
	text("level: " + level, 20,70) 
	
	characterY += hastighedY 
	hop += 0.2

	if (characterY < 515){
		hastighedY += gravity
	} else {
		characterY = 515
		hastighedY = 0
		isHop = false
	}

	let allCollected = true
	for (let i = 0; i < coins.length; i++){
		let c = coins[i]
		if(!c.collected){
			allCollected = false  
			if( characterX < c.x + 20 &&
				characterX + 60 > c.x &&
				characterY < c.y +20 &&
				characterY + 70 > c.y
			){
				c.collected = true
				score += 1
			}
		}
	}

	if(allCollected && level === 2){
		gameState = "gameComplete"
	}

	fill(150,75,0)
	for(let platform of level2platforms){
		rect(platform.x, platform.y, platform.width, platform.height)
	}
	
	character() 
	AD()
	coin()

	for (let platform of level2platforms){
		if( characterX + 60 > platform.x &&  
			characterX < platform.x + platform.width &&
			characterY + 60 > platform.y &&
			characterY + 60 < platform.y + 20 &&
			hastighedY >= 0
		){
			characterY = platform.y - 60
			hastighedY = 0
			isHop = false
		}
	}
}  

function character() {
	if (keyIsDown(68)){
	image(fattig, characterX, characterY, 90, 60)} 
	else if (keyIsDown(65)){ image(flip,characterX,characterY,90,60)
	} else { image(fattig, characterX, characterY, 90, 60) }
}

function coin(){// Går igennem alle mønter i arrayet
	for (let i = 0; i < coins.length; i++){
		let c = coins[i] //tag den aktuelle mønt
		if(!c.collected){ //Hvis mønten ikke er samlet op endu
			image(money,c.x, c.y, 20, 20) //tegn møntens billede på c.x og c.y kordinaterne 20x20 pixels
		}
	}
}

function AD(){
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

function startLevel2(){
	level = 2
	gameState = "level2"  
	score = 0
	characterX = 10
	characterY = 515

	coins = [
		{x: 200, y: 430, collected: false},
		{x: 550, y: 350, collected: false},
		{x: 950, y: 270, collected: false},
		{x: 350, y: 200, collected: false},
		{x: 1200, y: 450, collected: false},
		{x: 700, y: 320, collected: false},
	]
}

function resetGame() {
	gameState = "start"
	level = 1
	score = 0
	characterX = 10
	characterY = 515
	hastighedY = 0
	isHop = false

	coins = [
		{x:250, y:400, collected: false},
		{x:320, y:400, collected: false},
		{x:600, y:300, collected: false},
		{x:900, y:215, collected: false},
		{x:1200, y:450, collected: false},
		{x:400, y:380, collected: false},	
	]
}


function keyPressed() {
	if (gameState === "start" && keyCode === 13 ){
		gameState = "play"
	}
	else if (gameState === "levelComplete" && keyCode === 13){
		startLevel2()
	}

	if (gameState === "play" || gameState === "level2"){  
		if (keyCode === 32 && !isHop){
			hastighedY = -10
			hop = -1
			isHop = true
		}
	}

	if (keyCode === 82){
		resetGame()
	}
}
