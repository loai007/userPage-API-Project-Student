//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = { users: [] };
  }
  saveUserData(data) {
    this.data.users = [];
    data.results.forEach((res) => this.data.users.push(res));
  }
  getUserData() {
    return this.data.users;
  }

  requestData() {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7",
      success: (data) => {
        this.saveUserData(data);
      },
    });
  }
}
