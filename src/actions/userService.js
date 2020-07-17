import axios from "axios";
export const userService = {
  login,
  logout,
  registerNewServer,
};

async function login(username, password) {}

function logout() {
  localStorage.removeItem("token");
}

function registerNewServer(server) {
  axios({
    method: "POST",
    url: "http://localhost:8080/createServer",
    data: server,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
