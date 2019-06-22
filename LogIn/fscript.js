let fResultUser = [];
let fLoggedUser;
var fbtnLogIn = document.getElementById("fbtnLogIn");
fbtnLogIn.addEventListener("click", function (e) {
  e.preventDefault();
  var username = document.getElementById("fusername").value;
  var password = document.getElementById("fpassword").value;
  importJsons(username, password);
})
function fcheckUser(username, password) {
  for (let user of fResultUser) {
    if (username === user.userName) {
      if (password === user.password) {
        if (user.status === "active") {
          if (user.role === "admin") {
            console.log("ADMIN");
            return fLoggedUser = user.id;
          } else if (user.role === "user") {
            console.log("USER");
            return fLoggedUser = user.id;
          }
        } else {
          console.log("You have been suspended. Please contact your admin!");
          return;
        }
      } else {
        console.log("Invalid password");
        return;
      }
    } else {
      console.log("Invalid username");
      return;
    }
  }
}

async function importJsons(username, password) {
  try {


    let userResult = await fetch("https://pm-project-frontend.github.io/jsons/users.json");
    fResultUser = await userResult.json();

    console.log(fResultUser)
    fcheckUser(username, password);

  } catch (error) {
    throw new Error("There has been an error receiving the files. Please try again.")
  }
}
