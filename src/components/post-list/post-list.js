import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import * as line from '@fortawesome/free-regular-svg-icons'

import './styles.css'

const PostList = ({ posts, toComment, toShare, toLike }) => {
    return (
        <div className='posts-wrapper' >
            {
                posts.map( post => (
                    <div className='post-wrapper' key={post.id}>
                        <div className='avatar-wrapper'>
                            <img src={post.author.photo} style={{}}/>
                        </div>
                        <div className='post-body-wrapper'>
                            <div className='author-wrapper'>
                                <p className='author-name'>{post.author.name}</p>
                                <p>{post.author.nickname}</p>
                                <p>{post.date}</p>
                            </div>
                            <div className='content-wrapper'>
                                <p>{post.content.text}</p>
                                {post.content.picture && <img src={post.content.picture}/>}
                            </div>
                            <div className='indicators' style={{}}>
                                <div style={{display: 'flex'}}>
                                    <FontAwesomeIcon className='indicator-icon' size='lg' icon={line.faComment} onClick={() => toComment(post)} color= {(post.comments.commented) ? 'white' : 'grey'}/>
                                    <span>{post.comments.total}</span>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FontAwesomeIcon className='indicator-icon'  size='lg' icon={faRetweet} onClick={() => toShare(post)} color= {(post.shares.shared) ? '#1DA1F2' : 'grey'}/>
                                    <span>{post.shares.total}</span>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <FontAwesomeIcon className='indicator-icon'  size='lg' icon={faHeart} onClick={() => toLike(post)} color= {(post.likes.liked) ? '#E60023' : 'gray'}/>
                                    <span>{post.likes.total}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='indicator-icon'  size='lg' icon={faSignOutAlt} style={{transform: 'rotate(-90deg)'}} color= 'grey'/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

const mapStateToProps = state => ({
    posts: state
})

const mapDispatchToProps = dispatch => ({
    toComment(post){
        dispatch({ type: 'TO_COMMENT', post})
    },
    toShare(post){
        dispatch({ type: 'TO_SHARE', post })
    },
    toLike(post){
        dispatch({ type: 'TO_LIKE', post})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
