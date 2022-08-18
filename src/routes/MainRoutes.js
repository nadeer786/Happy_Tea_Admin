import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - Navabar pages
const Product = Loadable(lazy(() => import('../pages/products/index')));
const AddProduct = Loadable(lazy(() => import('../pages/products/AddProduct')));
const EditProduct = Loadable(lazy(() => import('../pages/products/EditProduct')));
const Settings = Loadable(lazy(() => import('../pages/settings/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/dashboard',
    element: <MainLayout />,
    children: [
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'products',
            element: <Product />
        },
        {
            path: 'products/edit/:productId',
            element: <EditProduct />
        },
        {
            path: 'products/add',
            element: <AddProduct />
        },
        {
            path: 'settings',
            element: <Settings />
        }
    ]
};

export default MainRoutes;
