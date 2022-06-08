class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  idGenerator() {
    return Math.floor(Math.random() * Math.pow(10, 9));
  }

  render() {}

  createComponent(tag, cssClasses, attributes) {
    const component = document.createElement(tag);
    if (cssClasses) {
      component.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        component.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(component);
    return component;
  }
}

export default Component;
