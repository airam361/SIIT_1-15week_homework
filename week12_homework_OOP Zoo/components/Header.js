class Header {
  template = `
    <header>
      <img src="./images/track.png" />
      <span>{{appName}}</span>

    </header>
   `;
  constructor(htmlRoot, props) {
    this.htmlRoot = htmlRoot;
    this.props = props;
    this.render();
  }

  render() {
    let template = this.template;
    for (let key in this.props) {
      template = template.replace("{{" + key + "}}", this.props[key]);
    }

    const renderHook = document.getElementById(this.htmlRoot);
    renderHook.innerHTML = template;
  }
}

export default Header;
