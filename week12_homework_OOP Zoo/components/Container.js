class Container {
  constructor(renderHookId, containerId) {
    this.renderHookId = renderHookId;
    this.containerId = containerId;
    this.render();
  }

  createRootElement() {
    const container = document.createElement("div");
    container.id = this.containerId;
    return container;
  }

  render() {
    document.getElementById(this.renderHookId).append(this.createRootElement());
  }
}

export default Container;
