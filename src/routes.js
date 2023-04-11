import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import CartContainer from './containers/CartContainer';
import Contact from './pages/Contact/Contact';
import ProductsContainerCopy from './containers/ProductsContainer copy';
import Blog from './pages/Blog/blog';
import Login from './pages/Login/Login';
import Detailproduct from './containers/Detailproduct';
//import ProductsContainer from './containers/ProductsContainer';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />,
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact></Contact>,
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />,
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />,
    },
    {
        path: '/admin',
        exact: false,
        main: () => <ProductListPage />,
    },
    {
        path: '/Blog',
        exact: false,
        main: () => <Blog />,
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />,
    },
    {
        path: '/register',
        exact: false,
        main: () => <Register />,
    },
    {
        path: '/product/:id/item',
        exact: false,
        main: ({ match }) => <Detailproduct match={match} />,
    },
    {
        path: '/product',
        exact: false,
        main: () => <ProductsContainerCopy />,
    },

    {
        path: '/cart',
        exact: false,
        main: () => <CartContainer></CartContainer>,
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />,
    },
];

export default routes;
