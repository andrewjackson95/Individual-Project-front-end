function registerUser(uName, uPwd){
    fetch("http://localhost:8080/find/newuser", {
        method: "POST",
        body: JSON.stringify({ name: uName, password: uPwd}),
        headers: { "Content-Type": "application/json" }
    })
    .then((res) => console.log(res))
    .catch (err => console.log(err));
}

function search(uSearch) {
    location = './searchResults.html?search=' + uSearch;
}