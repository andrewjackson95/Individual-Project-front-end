function updatePost(bid, btitle, bdescription, barticle){
    fetch("http://localhost:8080/find/blog/"+bid, {
        method: "PUT",
        body: JSON.stringify({ title: btitle, description: bdescription, article: barticle }),
        headers: { "Content-Type": "application/json" }
    })
    .then((res) => console.log(res))
    .catch (err => console.log(err));
}

function search(uSearch) {
    location = './searchResults.html?search=' + uSearch;
}