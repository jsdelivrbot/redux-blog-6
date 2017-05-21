import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={ PostsNew } />       
          <Route path="/posts/:id" component={ PostsShow } />
          <Route path="/" component={ PostsIndex } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
