// lazy 路由组件懒加载
import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

// import Home from '@/pages/home';
import Login from '../login';
import Admin from '../admin';

import Rich from '@/pages/rich';
import City from '@/pages/city';
import Order from '@/pages/order';
import User from '@/pages/user';
import BikeMap from '@/pages/bikemap';

import Ui from '@/pages/ui';
import Button from '@/pages/ui/pages/button';
import Modals from '@/pages/ui/pages/modals';
import Message from '@/pages/ui/pages/messages';
import Carousel from '@/pages/ui/pages/carousel';

import Table from '@/pages/tables/index';
import BasicTable from '@/pages/tables/basictable/02index';
import High from '@/pages/tables/hightable/02index';

const Home = lazy(() => import('@/pages/home'));

// 这个文件是用来渲染 <Route />的
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/login" />  // 重定向
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: Admin,
    routes: [
      // /home这一层
      {
        path: '/admin/home',
        component: Home
      },
      {
        path: '/admin/ui',
        component: Ui,
        routes: [
          {
            path: '/admin/ui/buttons',
            component: Button
          },
          {
            path: '/admin/ui/modals',
            component: Modals
          },
          {
            path: '/admin/ui/messages',
            component: Message
          },
          {
            path: '/admin/ui/carousel',
            component: Carousel
          },
        ],
      },
      {
        path: '/admin/table',
        component: Table,
        routes: [
          {
            path: '/admin/table/basic',
            component: BasicTable
          },
          {
            path: '/admin/table/high',
            component: High
          },
        ],
      },
      {
        path: '/admin/rich',
        component: Rich
      },
      {
        path: '/admin/city',
        component: City
      },
      {
        path: '/admin/order',
        component: Order
      },
      {
        path: '/admin/user',
        component: User
      },
      {
        path: '/admin/bikeMap',
        component: BikeMap
      }
    ]
  }
];

export default routes;
