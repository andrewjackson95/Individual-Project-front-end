function initialSearch() {
    const searchString = new URLSearchParams(location.search).get('search');
    searchBar.value = searchString;
    fullPost(searchString);
}

function fullPost(blogID) {
    fetch('http://localhost:8080/find/blog/'
        + blogID, { method: 'GET' }
    )
    .then(res => res.json())
    .then(json => displayPost(json))
    .catch(err => console.error(err));
}

function displayPost(data){
    let blogContainer = document.createElement('div');
    blogContainer.className = "container py-5 bg-faded";

    let blogColumns = document.createElement('div');
    blogColumns.className = "card-columns";

    let blogBorder = document.createElement('div');
    blogBorder.className = "card border-primary";
    blogBorder.display = "inline-block";

    // let blogImage = document.createElement('img');
    // blogImage.src = blogs.image;
    // blogImage.className = "card-img-top";


    let blogBody = document.createElement('div');
    blogBody.className = "card-body";
    let blogTitle = document.createElement('h5');
    blogTitle.className = "card-title";
    blogTitle.innerText = "Title: " + title + "\n" + "\n";
    blogBody.appendChild(blogTitle);
    let blogInfo = document.createElement('p');
    blogInfo.className = "card-text";
    blogInfo.innerText = "Post# " + id + "\n"
        + "Description: " + description + "\n"
        //+ "Article: " + b.article + "\n"
        + "Created: " + createdAt + "\n";
    blogBody.appendChild(blogInfo);

    let blogButton = document.createElement('button');
    blogButton.className = "btn btn-primary";
    blogButton.innerText = "View full article";
    blogButton.href = "#";
    blogButton.addEventListener('click', () => {
        console.log('CLICKED BLOG', id);
    });
    blogBody.appendChild(blogButton);

    let blogFooter = document.createElement('div');
    blogFooter.className = "card-footer";
    let blogFooterInfo = document.createElement('small');
    blogFooterInfo.className = "text-muted";
    blogFooterInfo.innerText = "Last updated: " + updatedAt;
    blogFooter.appendChild(blogFooterInfo);

    // blogBorder.appendChild(blogImage);
    blogBorder.appendChild(blogBody);
    blogBorder.appendChild(blogFooter);

    blogColumns.appendChild(blogBorder);

    blogContainer.appendChild(blogColumns);
    document.getElementById('testing').append(blogContainer);
}