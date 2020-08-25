class Battle{
    constructor(virus){
        this.battlePanel = createSprite(800, (displayHeight - 200)/2,300,400);

        this.cellPanel;

        this.virusNa = virus;

        this.virus = loadImage("Images/Virus.png");

        this.text = createElement("h4");
        this.text.html("Intiate battle with " + this.virusNa + "?");
        this.text.position(750,((displayHeight - 300)/2));

        this.inButton = createButton('Intiate Battle');
        this.inButton.position(750,((displayHeight - 150)/2));
        //this.inButton.mousePressed(this.fight());
    }

    fight(){
        this.battlePanel.width = 500;
        this.battlePanel.height = 400;
        this.text.hide();
        this.inButton.hide();
        imageMode(CENTER);
        image(this.virus,800,(displayHeight - 400)/2,50,50);
        gameState = "fight";
        this.cellPanel = new Panel();
    }

    hide(){
        this.battlePanel.visible = false;
        this.text.hide();
        this.inButton.hide();
    }

    show(){
        this.battlePanel.visible = true;
        this.text.show();
        this.inButton.show();
    }

    update(){
        if(gameState == "fight"){
            this.fight();
            this.cellPanel.update();
            //console.log("work");
        }
    }
}