import { createStore } from 'redux';

//fake-data
import AnakinSkywalker from './assets/imgs/AnakinSkywalker.png'
import ReySkywalker from './assets/imgs/ReySkywalker.png'
import HanSolo from './assets/imgs/HanSolo.png'
import LeiaOrgana from './assets/imgs/LeiaOrgana.png'
import Yoda from './assets/imgs/Yoda.png'

const img = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/0x0.jpg?fit=scale";
const leiaPost = 'https://vignette.wikia.nocookie.net/starwars/images/0/04/Leia_and_Sabine_-_FoD.png/revision/latest?cb=20170710115507';
const reyPost = 'https://vignette.wikia.nocookie.net/starwars/images/b/b4/Hellhound_Two_interior.png/revision/latest?cb=20180130193728';
const hanPost = 'https://vignette.wikia.nocookie.net/starwars/images/8/80/Han1_edited.jpg/revision/latest?cb=20090605140836';
const yodaPost = 'https://vignette.wikia.nocookie.net/starwars/images/e/ee/FiveFamousJediContinueToFailToDetectTheSith-AotC.jpg/revision/latest?cb=20060202113336';

//fake-posts
const posts = [
        {   
            id: 0,
            author: { name: 'Anakin Skywalker', photo: AnakinSkywalker, nickname:'@dart_vader' },
            date: '21-April-2020',
            content:{text: 'WTF? Who is ray? Why she is Skywalker? Luke..?', picture: img},
            comments: {total: 150, commented: false},
            likes: { total: 100, liked: false,},
            shares: {total: 300, shared: false}
        },
        {   
            id: 1,
            author:{name: 'Rey Skywalker', photo: ReySkywalker, nickname:'@rey_skywalker' },
            date: '21-April-2020',
            content:{text: 'We will see each other again. I believe that.', picture: reyPost},
            comments: {total: 482, commented: false},
            likes: { total: 887, liked: false,},
            shares: {total: 146, shared: true}
        },
        {   
            id: 2,
            author:{name: 'Han Solo', photo: HanSolo, nickname:'@han_solo' },
            date: '21-April-2020',
            content:{text: 'Never tell me the odds!', picture: hanPost},
            comments: {total: 150, commented: true},
            likes: { total: 100, liked: true,},
            shares: {total: 300, shared: false}
        },
        {   
            id: 3,
            author: { name: 'Anakin Skywalker', photo: AnakinSkywalker, nickname:'@dart_vader' },
            date: '22-April-2020',
            content:{text: 'I am lost help', picture: img},
            comments: {total: 910, commented: false},
            likes: { total: 210, liked: true,},
            shares: {total: 130, shared: true}
        },
        {   
            id: 4,
            author: { name: 'Leia Organa', photo: LeiaOrgana, nickname:'@the_princess' },
            date: '22-April-2020',
            content:{text: 'Everything you do, everywhere you go, you have the hope of a galaxy with you', picture: leiaPost},
            comments: {total: 610, commented: false},
            likes: { total: 101, liked: true,},
            shares: {total: 230, shared: true}
        },
        {   
            id: 5,
            author: { name: 'Yoda', photo: Yoda, nickname:'@yoda_master' },
            date: '22-April-2020',
            content:{text: 'For 800 years have I trained Jedi."', picture: yodaPost},
            comments: {total: 1000, commented: true},
            likes: { total: 133, liked: false,},
            shares: {total: 315, shared: true}
        },
];

const reducerPosts = ( state = posts, action ) => {
    switch(action.type){
        case 'TO_COMMENT':
            return [
                ...state.map(post => {
                    if(post.id === action.post.id){
                        post = Object.assign(post, post.comments.commented = !post.comments.commented);
                        return (post.comments.commented) ? Object.assign(post, post.comments.total += 1) : Object.assign(post, post.comments.total -= 1)
                    }
                    return post;
                })
            ]

        case 'TO_SHARE':
            return [
                ...state.map(post => {
                    if(post.id === action.post.id){
                        post = Object.assign(post, post.shares.shared = !post.shares.shared);
                        return (post.shares.shared) ? Object.assign(post, post.shares.total += 1) : Object.assign(post, post.shares.total -= 1)
                    }
                    return post;
                })
            ]

        case 'TO_LIKE':
            return [
                ...state.map(post => {
                    if(post.id === action.post.id){
                        post = Object.assign(post, post.likes.liked = !post.likes.liked);
                        return (post.likes.liked) ? Object.assign(post, post.likes.total += 1) : Object.assign(post, post.likes.total -= 1)
                    }
                    return post;
                })
            ]
        
        case 'ADD_POST':
            // console.log({...action.post});
            return [ 
                ...state, 
                { 
                    ...action.post 
                } 
            ]
    }
    return state;
};

export default createStore(reducerPosts)


