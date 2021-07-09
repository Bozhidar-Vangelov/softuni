function attachEvents() {
  //gets html elements
  const btnLoadPosts = document.getElementById("btnLoadPosts");
  const postsDropDown = document.getElementById("posts");
  const btnViewPost = document.getElementById("btnViewPost");
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const postComments = document.getElementById("post-comments");

  //clears previous data if available
  postTitle.innerHTML = "";
  postBody.innerHTML = "";

  btnLoadPosts.addEventListener("click", getPosts);
  btnViewPost.addEventListener("click", viewPost);

  async function getPosts() {
    //makes posts request and parses it
    const url = "http://localhost:3030/jsonstore/blog/posts";
    const postsRequest = await fetch(url);
    const posts = await postsRequest.json();

    //transforms posts to array
    let postsArr = Array.from(Object.values(posts));

    //clears previous data if available
    postsDropDown.innerHTML = "";

    //fulfill posts dropdown menu
    postsArr.forEach((post) => {
      let item = document.createElement("option");
      item.value = post.id;
      item.textContent = post.title.toUpperCase();
      postsDropDown.appendChild(item);
    });
  }

  async function viewPost() {
    //makes comments request and parses it
    const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";
    const commentsRequest = await fetch(commentsUrl);
    const comments = await commentsRequest.json();

    let postId = postsDropDown.value;

    //makes post request and parses it
    const postUrl = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
    const postRequest = await fetch(postUrl);
    const post = await postRequest.json();

    //transforms comments to array
    let commentsArr = Array.from(Object.values(comments));

    //fulfill posts title&body
    postTitle.textContent = post.title;
    postBody.textContent = post.body;

    //clears previous data if available
    postComments.innerHTML = "";

    //fulfill list with comments
    commentsArr.forEach((comment) => {
      if (comment.postId === postId) {
        let item = document.createElement("li");
        item.textContent = comment.text;
        postComments.appendChild(item);
      }
    });
  }
}

attachEvents();
