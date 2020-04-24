import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const NewPost = ({authors, totalPosts, add }) => {
    const [ author, setAuthor ] = useState({...authors[0]})
    const [ contentText, setContentText ] = useState('')
    const [ contentPicture, setContentPicture ] = useState('')
    const [ post, setPost ] = useState({})

    function updateAuthorValue(e){
        const selectedAuthor = authors.filter(x => x.name === e.target.value);
        setAuthor(selectedAuthor[0])
    }
    function updateContentTextValue(e){
        setContentText(e.target.value)
    }
    function updateContentPictureValue(e){
        setContentPicture(e.target.value)
    }

    function submitValue(e){
        const today = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const newPost = {
            id: totalPosts,
            author,
            date: `${today.getDate()}-${monthNames[today.getMonth()]}-${today.getFullYear()}`,
            content: {text: contentText, 'picture': contentPicture},
            comments: {total: 0, commented: false},
            shares: {total: 0, shared: false},
            likes: {total: 0, liked: false},
        }
        setPost(Object.assign(post, newPost));
        e.preventDefault();
    }

    return (
        <div className='new-post-wrapper'>
            <div className='post-creator-wrapper'>
                <h2>New Post</h2>
                <form onSubmit={e => {submitValue(e); add(post); setContentText(''); setContentPicture('')}}>
                    <label>
                        {`Select author: `}
                        <select value={author.name} onChange={updateAuthorValue}>
                            {
                                authors.map(value => (
                                    <option value={value.name} key={value.nickname}>{value.name}</option>
                                ))
                            }
                        </select>
                    </label>
                    <input type='text' className='picture-link user-input' value={contentPicture} onChange={updateContentPictureValue} placeholder='Image link here..'/>
                    <textarea value={contentText} className='content-text user-input' onChange={updateContentTextValue} placeholder='Text for your post here...'/>
                    <input className='add-post-btn' type='submit' value='ADD' disabled={contentText.length < 5}/>
                </form>
            </div>
        </div>
    )
}

const mapSetToProps = state => ({  
    authors: state.map(post => post.author).reduce((acc, curr) => {
        const nicknames = acc.map(author => author.nickname);
        if(!nicknames.includes(curr.nickname)){
            acc.push(curr);
        }
        return acc;
    }, []),
    totalPosts: state.length,
})

const mapDispatchToProps = dispatch => ({
    add(post){
        dispatch({ type: 'ADD_POST', post})
    }
})

export default connect(mapSetToProps, mapDispatchToProps)(NewPost);