import React from 'react'
import Loadable from 'react-loadable'
import Loading from '@/components/Loading'

const User = Loadable({
  loader: () => import('./../views/User'),
  loading: () => <Loading/>
})

const List = Loadable({
  loader: () => import('./../views/List'),
  loading: () => <Loading/>
})

const Login = Loadable({
  loader: () => import('./../views/Login'),
  loading: () => <Loading/>
})

const Message = Loadable({
  loader: () => import('./../views/Message'),
  loading: () => <Loading/>
})

const Editor = Loadable({
  loader: () => import('./../views/Editor'),
  loading: () => <Loading/>
})

const Detail = Loadable({
  loader: () => import('./../views/Detail'),
  loading: () => <Loading/>
})

const routers = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    component: List,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/message',
    component: Message,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editor',
    component: Editor,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/detail',
    component: Detail,
    meta: {
      requiresAuth: false
    }
  }
]

export default routers
