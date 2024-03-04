import { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {

    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setPost({
            ...post, [name]: value
        })
    console.log(post)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

       if(post.title.length > 2 && post.body.length > 15){
            await fetch('http://localhost:8000/post', {
                method: 'POST',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify(post)
            })
            
            setPost({
                title: '',
                body: ''
            })
        }
    }
   
  return (
    <div className='container'>
       

        <form className="form-container">
            <header className="header-section">
                <h1>Create a new post</h1>
            </header>

            <div className="title">
                <input type='text' placeholder='' name='title' value={post.title} onChange={handleChange}/>
            </div>

            <div className="body">
                <textarea name="body" value={post.body} onChange={handleChange}/>
            </div>

            <div className="btn-container">
                <button className="btn" onClick={handleSubmit}>Create Post</button>
            </div>
        </form>
    </div>
  )
}

export default CreatePost;