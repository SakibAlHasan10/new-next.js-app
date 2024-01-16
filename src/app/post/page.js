import React from 'react';

const PostsPage = async() => {
    const res = await fetch("http://localhost:5000/post",{cache:"force-cache"})
    const posts = await res.json()
    // console.log(posts)
    return (
        <div>
            <h2>This is post page</h2>
            <h4>Total post: {posts?.length} </h4>
            {
                posts?.map(post=><div className='text-center w-8/12' key={post.id}>
                    <h3>{post.name}</h3>
                    <p>{post.description}</p>
                </div>)
            }
        </div>
    );
};

export default PostsPage;