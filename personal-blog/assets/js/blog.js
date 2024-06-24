const postsContainer = document.getElementById('posts');
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><strong>Author:</strong> ${post.username}</p>`;
    postsContainer.appendChild(postElement);
});
;
