let userName = document.getElementById('userName');
let userPassword = document.getElementById('userPassword');

function login() {
    fetch('http://localhost:8080/find/users/'
        + userName.value, { method: 'GET' }
    )
        .then(res => res.json())
        .then(json => console.log(json))
        //.then(json => pwcheck(json));
        .catch(err => console.error(err));
}

function pwcheck(data) {
    if (data.password === userPassword.value) {

    }
}

function search(uSearch) {
    location = './searchResults.html?search=' + uSearch;
}

function details() {
    let userName = document.getElementById('userName');
    let userPassword = document.getElementById('userPassword');
    if (typeof (Storage) !== "undefined") {
        sessionStorage.userName = userName.value;
        sessionStorage.userPassword = userPassword.value;
    }
    else {
        sessionStorage.userName = guest;
        sessionStorage.userPassword = guest;
    }
    console.log(sessionStorage.userName);
    console.log(sessionStorage.userPassword);
}