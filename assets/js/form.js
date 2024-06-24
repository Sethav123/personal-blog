const form = document.getElementById('blogForm');

    form.addEventListener('submit', function(event) { //adds event listener for when form is submitted
        event.preventDefault(); //prevents page from reloading

    //retrieves the data from the form
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    //checks that none of the fields of the form are empty, and alerts you if they are
    if (!username || !title || !content) {
        alert('Please complete the form.');
        return; 
    }

    const blogPost = {
        username: username,
        title: title,
        content: content
    };

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || []; //retrieves blogposts from local storage
    blogPosts.push(blogPost); //adds new blog post to array
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    window.location.href = 'blog.html'; //redirects to the blog page
});