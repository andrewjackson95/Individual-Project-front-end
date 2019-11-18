http://localhost:8080/find/blog/

function deleteBlog(blogid){
    fetch("http://localhost:8080/find/remove/"+blogid, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
    .then((res) => console.log(res))
    .catch (err => console.log(err));
}
