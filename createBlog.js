function search(uSearch) {
    location = './searchResults.html?search=' + uSearch;
}

function createBlog(userID, btitle, bdescription, barticle){
    fetch("http://localhost:8080/find/blog", {
        method: "POST",
        body: JSON.stringify({ userId: userID, title: btitle, description: bdescription, article: barticle }),
        headers: { "Content-Type": "application/json" }
    })
    .then((res) => console.log(res))
    .catch (err => console.log(err));
}