class Food {
    constructor() {
       this.foodStock = null
       this.lastFed = null
       this.bottleimg = loadImage("images/Milk.png")
    }

    getFS(){
       var foodSref = db.ref('/Food')
       foodSref.on("value", (data) =>{
       this.foodStock = data.val(); 
     })
  }
     
    getLF(){
       var foodSref = db.ref('/LastFedTime')
       foodSref.on("value", (data) =>{
       this.lastFed = data.val(); 
     })
  } 

  updateLF(){
    var foodSref = db.ref('/') 
    foodSref.update({
        'LastFedTime': hour + period

    })
 }

deductF(){
    var foodSrefs = db.ref('/') 
    foodSrefs.update({
        'Food': this.foodStock - 1
    })
  }
  display(){
    var x = 80
    var y = 100
    imageMode(CENTER);
    if(this.foodStock > 0){
        
        for(var i = 0; i < this.foodStock; i++){
              if(i%10 === 0){
                x = 60
                y = y + 60
            }
            
            image(this.bottleimg, x, y , 60, 55)
            x = x + 30
        }
    }
    
    }
    
} 
