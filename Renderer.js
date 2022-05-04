class Renderer {
  constructor() {}

  renderData(data) {
    const firstUser = data.users.shift();
    const friends = data.users;
    const kanye = data.kanye;
    const meatText = data.randomText[0];

    $(".user-container").empty();
    this.source = $("#user-container").html();
    this.template = Handlebars.compile(this.source);
    this.newHTML = this.template(firstUser);
    $(".user-container").append(this.newHTML);

    $(".friends-container").empty();
    this.source = $("#friends-container").html();
    this.template = Handlebars.compile(this.source);
    this.newHTML = this.template({ friends });
    $(".friends-container").append(this.newHTML);

    $("#kanye").empty();
    this.source = $("#quote-container").html();
    this.template = Handlebars.compile(this.source);
    this.newHTML = this.template({ kanye });
    $("#kanye").append(this.newHTML);

    $("#pokemon").empty();
    this.source = $("#pokemon-container").html();
    this.template = Handlebars.compile(this.source);
    this.newHTML = this.template(data.pokemon);
    $("#pokemon").append(this.newHTML);

    $("#meat").empty();
    this.source = $("#meat-container").html();
    this.template = Handlebars.compile(this.source);
    this.newHTML = this.template({ meatText });
    $("#meat").append(this.newHTML);
  }
}
