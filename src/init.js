const config = {
	width : 320*2,
	height : 180*2,
	parent : 'container',
	type : Phaser.AUTO,
	scene : {
		preload : preload,
		create : create,
		update : update
	}, 
	physics: {
		default : 'arcade',
		arcade : {
			gravity: {
				//y : 500
			}
		}
	}
}


var game = new Phaser.Game(config);

function preload(){
	this.load.image('bola','./assets/fulbo.png')
}

function create(){
	this.bola = this.physics.add.image(80,80,'bola')
	//console.log(this.bola)	
	this.bola.setScale(0.2)

	/*
	//console.log(Phaser.Input.Keyboard.KeyCodes)
	this.input.keyboard.on('keydown_RIGHT', ()=>{
		this.bola.setAcceleration(100,0) 
	})
	this.input.keyboard.on('keyup_RIGHT', ()=>{
		this.bola.setAcceleration(0,0) 
		this.bola.setVelocity(0)
	})
	*/

	this.cursor = this.input.keyboard.createCursorKeys()
	

	// Fisica
	this.bola.setCollideWorldBounds(true)
	this.bola.setBounce(0.7)
	//this.bola.setAcceleration(100,0)
	//this.bola.setVelocity(100,0)

	//controles
	this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
	this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
}

function update(time,delta){
	this.bola.angle++

	//controlse left riht shift u espacio
	if(this.cursor.right.isDown | this.right.isDown){
		this.bola.x++
	}else if(this.cursor.left.isDown | this.left.isDown){
		this.bola.x--
	}
}