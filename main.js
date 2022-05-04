const apiManager = new APIManager();
const render = new Renderer();

$("#loadData").on("click", () => {
  apiManager.requestData();
});

$("#display-btn").on("click", function () {
  render.renderData(apiManager.getUserData());
});
