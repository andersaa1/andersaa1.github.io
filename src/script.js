
// Below code is for API
// document.addEventListener('DOMContentLoaded', () => {
//     const postsContainer = document.getElementById('posts-container');
//
//     fetch('https://api.jsonbin.io/v3/b/672613bfacd3cb34a8a14278', {
//         headers: {
//             'X-Access-Key': '$2a$10$r.WqQEh1X04rn7Gcpky/U.wmrVqD2lmdoOzSxaILZ6.y7rfYAJSBu'
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             data.record.forEach(post => {
//                 const postContainer = document.createElement('div');
//                 postContainer.classList.add('post-container');
//
//                 const postHeader = document.createElement('div');
//                 postHeader.classList.add('post-header');
//
//                 const profileIcon = document.createElement('img');
//                 profileIcon.src = 'images/profile_icon.jpeg';
//                 profileIcon.alt = 'profile_icon';
//                 profileIcon.classList.add('profile-icon');
//
//                 const postDate = document.createElement('p');
//                 postDate.classList.add('data');
//                 postDate.textContent = new Date(post.timestamp).toLocaleDateString();
//
//                 postHeader.appendChild(profileIcon);
//                 postHeader.appendChild(postDate);
//
//                 const postImage = document.createElement('img');
//                 postImage.src = post.image;
//                 postImage.alt = post.title;
//
//                 const postGroup = document.createElement('div');
//                 postGroup.classList.add('post-group');
//
//                 const postContent = document.createElement('p');
//                 postContent.textContent = post.content;
//
//                 postGroup.appendChild(postContent);
//
//                 const likeButton = document.createElement('img');
//                 likeButton.src = 'images/like-svgrepo-com.svg';
//                 likeButton.alt = 'like button';
//                 likeButton.classList.add('post-like-button');
//
//                 postContainer.appendChild(postHeader);
//                 postContainer.appendChild(postImage);
//                 postContainer.appendChild(postGroup);
//                 postContainer.appendChild(likeButton);
//
//                 postsContainer.appendChild(postContainer);
//                 });
//         })
//         .catch(error => console.error('Error fetching posts:', error));
// });

// Code below is for local json file.
document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    const profileIcon = document.getElementById("header-profile");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // logic for dropdown menu
    profileIcon.addEventListener("click", (event) => {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none"; // hides the dropdown menu
        } else {
            dropdownMenu.style.display = "block"; // shows the dropwdown menu
        }
    });

    fetch('src/data.json')
        .then(response => response.json())
        .then(data => {
                data.forEach(post => {
                    const postContainer = document.createElement('div');
                    postContainer.classList.add('post-container');

                    const postHeader = document.createElement('div');
                    postHeader.classList.add('post-header');

                    const profileIcon = document.createElement('img');
                    profileIcon.src = 'images/profile_icon.jpeg';
                    profileIcon.alt = 'profile_icon';
                    profileIcon.classList.add('profile-icon');

                    const postDate = document.createElement('p');
                    postDate.classList.add('data');
                    postDate.textContent = new Date(post.timestamp).toLocaleDateString();

                    postHeader.appendChild(profileIcon);
                    postHeader.appendChild(postDate);

                    const postImage = document.createElement('img');
                    postImage.src = post.image;
                    postImage.alt = post.title;

                    const postGroup = document.createElement('div');
                    postGroup.classList.add('post-group');

                    const postContent = document.createElement('p');
                    postContent.textContent = post.content;

                    postGroup.appendChild(postContent);

                    const likeButton = document.createElement('img');
                    likeButton.src = 'images/like-svgrepo-com.svg';
                    likeButton.alt = 'like button';
                    likeButton.classList.add('post-like-button');

                    postContainer.appendChild(postHeader);
                    postContainer.appendChild(postImage);
                    postContainer.appendChild(postGroup);
                    postContainer.appendChild(likeButton);

                    postsContainer.appendChild(postContainer);
                });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
