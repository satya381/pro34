//Create variables here
var dog,happydog,database,foods,foodstock;

function preload()
{
  dogimg = loadImage("images/dogImg.png")
  dogimg1 = loadImage("images/dogImg1.png")

	//load images here
}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(250,300,40,40)
  dog.addImage(dogimg);
  database = firebase.database();

  foodstock=database.ref('Food');
  foodstock.on("value",readStock);
  
}


function draw() {  

  background(46,139,87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);
  }

  drawSprites();
text("foodReamainig"+foods,170,200)

  //add styles here

}
function readStock(data){
  foods=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}


