//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = { users: [], kanye: {}, pokemon: {}, randomText: {} };
  }
  saveUserData(data) {
    this.data.users = [];
    data.results.forEach((res) => this.data.users.push(res));
  }
  getData() {
    return this.data;
  }

  saveKanyeData(data) {
    this.data.kanye = data.quote;
  }

  savePokemonData(data) {
    this.data.pokemon = {
      name: "Favorite Pokemon: " + data.name,
      img: data.sprites.front_default,
    };
  }

  saveRandomTextData(data) {
    this.data.randomText = data;
  }

  requestData() {
    const randomPokemonID = Math.floor(Math.random(1000) * 1000);
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7",
      success: (data) => {
        this.saveUserData(data);
      },
    });

    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest/",
      success: (data) => {
        this.saveKanyeData(data);
      },
    });

    $.ajax({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/" + randomPokemonID,
      success: (data) => {
        this.savePokemonData(data);
      },
    });

    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      success: (data) => {
        this.saveRandomTextData(data);
      },
    });
  }
}
