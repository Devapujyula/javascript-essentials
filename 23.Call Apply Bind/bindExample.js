class Button {
  constructor(label) {
    this.label = label;
  }
  clickHandler() {
    console.log("Clicked: " + this.label);
  }

  render() {
    const button = document.createElement("button");
    button.innerText = this.label;
    button.addEventListener("click", this.clickHandler.bind(this));
    return button;
  }
}

const btn = new Button("Save");
document.body.appendChild(btn.render());
