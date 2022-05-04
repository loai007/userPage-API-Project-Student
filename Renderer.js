class Renderer {
  constructor() {}

  renderData(data) {
    const firstUser = data.shift();

    $(".user-container").empty();
    this.source = $("#user-container").html();
    this.template = Handlebars.compile(this.source);
    this.newHTML = this.template(firstUser);
    $(".user-container").append(this.newHTML);

    $(".friends-container").empty();
    this.source = $("#friends-container").html();
    this.template = Handlebars.compile(this.source);
    this.newHTML = this.template({ data });
    $(".friends-container").append(this.newHTML);
  }
}
