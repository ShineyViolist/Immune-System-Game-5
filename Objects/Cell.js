class Cell {
    constructor(panel,offsetX,cellType){
        this.image = loadImage("Images/Macrophage.png");

        this.cellState = "rest";
        this.cellType = cellType;

        this.scale = 0.7;

        this.cell = createSprite(panel.x - offsetX,panel.y - 100,50,50);
        this.cell.addImage(this.image);
        this.cell.scale = this.scale;

        this.display = createSprite(panel.x - offsetX,panel.y - 100,50,50);
        this.display.addImage(this.image);
        this.display.scale = this.scale;

        this.set = 0;
        this.display;

        this.x = panel.x - offsetX;
        this.y = panel.y - 100;
    }

    pressedOver(){
        if(mousePressedOver(this.display)){
            this.display.x = mouseX;
            this.display.y = mouseY;
            //console.log("work");
            //this.set = 1;
        }
        //this.display = createSprite(mouseX,mouseY,50,50);
    }

    letGo(body,virus){
        if(this.display.isTouching(body)){
            this.set = 1;
        } else {
            this.display.x = this.x;
            this.display.y = this.y;
            this.set = 0;
        }

        if(this.display.isTouching(virus.virus)&& virus !== undefined){
            this.cellState = "fight";
        }
    }
}