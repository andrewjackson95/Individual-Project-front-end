function findUser() {
    fetch("http://localhost:8080/find/all", { method: 'GET' })
        .then(res => res.json())
        .then(json => displayUser(json))
        .catch(err => console.error(err));
}

function displayUser(user) {
    user.forEach(u => {
        // let card = document.createElement('div');
        // card.className = "card";
        // let userName = document.createElement('p');
        // userName.innerText = "User Name: " + u.name + "\n";
        // card.appendChild(userName);
        // document.getElementById('userArea').appendChild(card);
        // displayBlogs(u);
    });
    const allBlogs = user
        .map(u => u.blogs.map(b => ({ ...b, name: u.name })))
        .reduce((prev, curr) => ([...prev, ...curr]), []);
    displayBlogs2(allBlogs);
}

function displayBlogs({ blogs }) {
    console.log(blogs);
    blogs.forEach(b => {
        let card = document.createElement('div');
        card.className = "card";
        let blog = document.createElement('p');
        blog.innerText = "Blog Post: " + b.id + "\n"
            + "Title: " + b.title + "\n"
            + "Description: " + b.description + "\n"
            + "Article: " + b.article + "\n"
            + "Created: " + b.createdAt + "\n"
            + "Last updated: " + b.updatedAt + "\n";
        card.appendChild(blog);
        document.getElementById('userArea').append(card);
    });
}

function displayBlogs2(blogs) {
    let blogContainer = document.createElement('div');
    blogContainer.className = "container py-5 bg-faded";

    let blogColumns = document.createElement('div');
    blogColumns.className = "card-columns";

    blogs.forEach(b => {

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
        blogTitle.innerText = "Title: " + b.title + "\n" + "\n";
        blogBody.appendChild(blogTitle);
        let blogInfo = document.createElement('p');
        blogInfo.className = "card-text";
        blogInfo.innerText = "Post# " + b.id + "\n"
            + "Description: " + b.description + "\n"
            //+ "Article: " + b.article + "\n"
            + "Created: " + b.createdAt + "\n";
        blogBody.appendChild(blogInfo);

        let blogButton = document.createElement('button');
        blogButton.innerText = "View full article";
        blogButton.className = "btn btn-primary";
        blogButton.href = "#";
        blogButton.addEventListener('click', () => {
            console.log('CLICKED BLOG', b.id);
            location = './fullpost.html?fullPost=' + b.id;
        });
        blogBody.appendChild(blogButton);

        let blogFooter = document.createElement('div');
        blogFooter.className = "card-footer";
        let blogFooterInfo = document.createElement('small');
        blogFooterInfo.className = "text-muted";
        blogFooterInfo.innerText = "Last updated: " + b.updatedAt;
        blogFooter.appendChild(blogFooterInfo);

        // blogBorder.appendChild(blogImage);
        blogBorder.appendChild(blogBody);
        blogBorder.appendChild(blogFooter);

        blogColumns.appendChild(blogBorder);
    });

    blogContainer.appendChild(blogColumns);
    document.getElementById('userBlogArea2').append(blogContainer);
}

function search(uSearch) {
    location = './searchResults.html?search=' + uSearch;
}