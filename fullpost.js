function initialSearch() {
    const viewPost = new URLSearchParams(location.search).get('fullPost');
    fullPost(viewPost);
}

function fullPost(blogID) {
    fetch('http://localhost:8080/find/blog/'
        + blogID, { method: 'GET' }
    )
        .then(res => res.json())
        //.then(json => console.log(json))
        .then(json => displayPost(json))
        .catch(err => console.error(err));
}

function displayPost(data) {
    let blogContainer = document.createElement('div');
    blogContainer.className = "container py-5 bg-faded";

    let blogColumns = document.createElement('div');
    blogColumns.className = "card-columns";

    let blogBorder = document.createElement('div');
    blogBorder.className = "card border-primary";
    blogBorder.display = "inline-block";

    let blogBody = document.createElement('div');
    blogBody.className = "card-body";
    let blogTitle = document.createElement('h5');
    blogTitle.className = "card-title";
    blogTitle.innerText = "Title: " + data.title + "\n" + "\n";
    blogBody.appendChild(blogTitle);
    let blogInfo = document.createElement('p');
    blogInfo.className = "card-text";
    blogInfo.innerText = "User id: " + data.userId + "\n"
        + "Post# " + data.id + "\n"
        + "Description: " + data.description + "\n"
        + "Article: " + data.article + "\n"
        + "Created: " + data.createdAt + "\n";
    blogBody.appendChild(blogInfo);

    let blogFooter = document.createElement('div');
    blogFooter.className = "card-footer";
    let blogFooterInfo = document.createElement('small');
    blogFooterInfo.className = "text-muted";
    blogFooterInfo.innerText = "Last updated: " + data.updatedAt;
    blogFooter.appendChild(blogFooterInfo);

    blogBorder.appendChild(blogBody);
    blogBorder.appendChild(blogFooter);

    blogColumns.appendChild(blogBorder);

    blogContainer.appendChild(blogColumns);
    document.getElementById('testing').append(blogContainer);
}