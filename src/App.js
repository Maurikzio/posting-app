import React from 'react';
import { Provider } from 'react-redux';

import store from './store'
import NewPost from './components/new-post/new-post';
import PostList from './components/post-list/post-list';

function App() {
  return (
    <Provider store={store}>
      <div style={{display: 'flex', flexDirection:'horizontal'}}>
        <NewPost />
        <PostList />        
      </div>
    </Provider>
  );
}

export default App;
