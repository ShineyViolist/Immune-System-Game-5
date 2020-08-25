class Panel{
    constructor(){
        this.panel1 = createSprite(300, (displayHeight - 200)/2, 500, 400);
        this.panel1.shapeColor = "red";
        this.index = 0;
        this.object = [];
        for(var i = 150; i >= -200; i = i - 100){
            this.object[this.index] = new Cell(this.panel1,i,"Macrophage");
            this.index++;
        }
    }

    update(){
        for(var j = 0; j < this.object.length; j++){
            this.object[j].pressedOver();
            console.log(j);
        }
    }

    release(){
        for(j = 0; j < this.object.length; j++){ 
            this.object[j].letGo(body,virus);
            console.log(this.object[j].cellState);
        }
    }
}