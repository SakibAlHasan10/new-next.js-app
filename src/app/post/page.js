import React from 'react';

const PostsPage = async() => {
    const res = await fetch("http://localhost:5000/post")
    const posts = await res.json()
    // console.log(posts)
    return (
        <div>
            <h2>This is post page</h2>
            <h4>Total post: {posts?.length}</h4>
        </div>
    );
};

export default PostsPage;