import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './style/common.less';
import Layout from './layout';
import store from './store';

ReactDOM.render(
  // Provider的作用类似于提供了一个大容器，将组件和redux进行关联。
  <Provider store={store}>
    <BrowserRouter>
      {/* 异步组件，Vue3.0也有 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
