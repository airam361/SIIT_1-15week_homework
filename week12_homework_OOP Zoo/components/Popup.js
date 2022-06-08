class Popup {
  popupWraper;

  constructor(event, func) {
    this.event = event;
    this.func = func;
    this.render();
    this.delete();
  }

  delete() {
    setTimeout(() => {
      this.popupWraper.remove();
    }, 2000);
  }

  render() {
    this.popupWraper = document.createElement("div");
    this.popupWraper.className = "popup-wraper";
    this.popupWraper.innerHTML = `
      <div class="popup">${this.func()}</div>
    `;
    this.event.target.append(this.popupWraper);
  }
}

export default Popup;
