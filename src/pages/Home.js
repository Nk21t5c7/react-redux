import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addPost, deletePost } from '../features/Posts';
import { logout } from "../features/Users";
export const Home = () => {
    const [name, setName] = React.useState("")
    const [content, setContent] = React.useState("")
    const postList = useSelector((state) => state.posts.value);
    console.log(postList)

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addPost({
            id: postList.length,
            name: name,
            content: content
        }))

        setName("");
        setContent("")
    }
    return <div>
        <div>
            <h1>Home</h1>
            <button className="logoutBtn" onClick={() => dispatch(logout())}>Log out</button>

        </div>

        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor='content'>Content</label>
            <input type='text' id='content' onChange={(e) => setContent(e.target.value)}></input>

            <button onClick={handleClick}>Submit</button>
        </div>

        <div className='postContainer'>
            {postList.map((item, i) => {
                return <div key={i} className='post'>
                    <h2>{item.name}</h2>
                    <p>{item.content}</p>
                    <button onClick={() => dispatch(deletePost({ id: item.id }))}>Delete</button>
                </div>
            })}
        </div>
    </div>;
};
