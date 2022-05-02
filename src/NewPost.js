import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import DataContext from './context/DataContext';

const NewPost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const { posts, setPosts } = useContext(DataContext);
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };
        
           
            const allPosts = [...posts, newPost];
            setPosts(allPosts);
        localStorage.setItem('posts', JSON.stringify(allPosts))
        console.log(localStorage)
            setPostTitle('');
            setPostBody('');
            history('/');
        
    }

    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost