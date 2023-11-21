function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username);
    console.log(password);

    if (username === "sam" && password === "samy") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
}
