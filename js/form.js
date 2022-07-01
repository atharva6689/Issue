class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("GO");
    this.titleImg = createImg("./Images/Title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");

    this.Stage1Button.class("customButton");
    this.Stage2Button.class("customButton");
    this.Stage3Button.class("customButton");
    this.Stage4Button.class("customButton");
    this.Stage5Button.class("customButton");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();

      this.Stage1Button = createButton("Stage 1");
      this.Stage2Button = createButton("Stage 2");
      this.Stage3Button = createButton("Stage 3");
      this.Stage4Button = createButton("Stage 4");
      this.Stage5Button = createButton("Stage 5");
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
