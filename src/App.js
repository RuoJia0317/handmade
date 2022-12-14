import React from 'react'
import { useRoutes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/style.scss'
import Layout from './pages/Layout'

import CourseCart from './pages/CourseCart'
import ProductCart from './pages/ProductCart'
import CheckoutPageCourse from './pages/CheckoutPageCourse'
import CheckoutPageProduct from './pages/CheckoutPageProduct'

import BlogLayout from './components/Blog'
import Home from './pages/Home'

import FindPasswordPage from './pages/FindPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

import About from './pages/AboutPage'
import AboutLayout from './components/About'
import News from './pages/NewsPage'
import NewsLayout from './components/News'
import UserPage from './pages/UserPage'
import UserAccountPage from './pages/UserAccountPage'
import UserOrdersPage from './pages/UserOrdersPage'
import UserProductOrderDetailPage from './pages/UserProductOrderDetailPage'
import UserCoursesOrderDetailPage from './pages/UserCoursesOrderDetailPage'
import UserLikesPage from './pages/UserLikesPage'
import UserCouponsPage from './pages/UserCouponsPage'
import UserBlogsPage from './pages/UserBlogsPage'

import BlogDetailPage from './pages/BlogDetailPage'
import BlogCreatePage from './pages/BlogCreatePage'
import BlogEditPage from './pages/BlogEditPage'

import Store from './pages/Store'

import NoFound from './pages/NoFound'
import StoreDetail from './pages/StoreDetail'
import ProductDetailPage from './pages/ProductDetailPage'
import CourseDetailPage from './pages/CourseDetailPage'
import Products from './pages/Products'
import MapSearch from './pages/MapSearch'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ChatRoomPage from './pages/ChatRoomPage'
import Courses from './pages/Courses'
import Chat from './components/ChatRoom/Chat'

const routeConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'Login',
        element: <LoginPage />,
      },
      {
        path: 'SignUp',
        element: <SignUpPage />,
      },
      {
        path: 'blog',
        element: <BlogLayout />,
      },
      {
        path: 'blog/:blogId/edit',
        element: <BlogEditPage />,
      },
      {
        path: 'blog/:blogId',
        element: <BlogDetailPage />,
      },
      {
        path: 'blog/create',
        element: <BlogCreatePage />,
      },
      {
        path: 'map',
        element: <MapSearch />,
      },
      {
        path: '/course',
        element: <Courses />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path: 'store/:storeId',
        element: <StoreDetail />,
      },

      {
        path: 'user',
        element: <UserPage />,
        children: [
          {
            path: 'management',
            element: <UserAccountPage />,
          },
          {
            path: 'orders',
            element: <UserOrdersPage />,
          },
          {
            path: 'orders/products/:orderNumber',
            element: <UserProductOrderDetailPage />,
          },
          {
            path: 'orders/courses/:orderNumber',
            element: <UserCoursesOrderDetailPage />,
          },
          {
            path: 'likes',
            element: <UserLikesPage />,
          },
          {
            path: 'coupons',
            element: <UserCouponsPage />,
          },
          {
            path: 'blogs',
            element: <UserBlogsPage />,
          },
          {
            path: 'chat',
            element: <ChatRoomPage />,
          },
        ],
      },
      {
        path: 'chat/:chatId',
        element: <Chat />,
      },

      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'about',
        element: <AboutLayout />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'news',
        element: <NewsLayout />,
      },

      {
        path: 'FindPassword',
        element: <FindPasswordPage />,
      },
      {
        path: 'ResetPassword/:email',
        element: <ResetPasswordPage />,
      },

      {
        path: '*',
        element: <NoFound />,
      },
      {
        path: 'shop',
        element: <Products />,
      },
      {
        path: 'product/detail/:productId',
        element: <ProductDetailPage />,
      },
      {
        path: 'course/detail/:courseId',
        element: <CourseDetailPage />,
      },
    ],
  },
  {
    path: '/course_cart/:userCouponId',
    element: <CourseCart />,
  },
  {
    path: '/product_cart/:userCouponId',
    element: <ProductCart />,
  },
  {
    path: '/course_checkout/:orderId',
    element: <CheckoutPageCourse />,
  },
  {
    path: '/product_checkout/:orderId',
    element: <CheckoutPageProduct />,
  },
]

const App = () => {
  const element = useRoutes(routeConfig)
  return (
    <>
      <ToastContainer />
      {element}
    </>
  )
}

export default App
