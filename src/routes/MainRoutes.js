import { lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

// const MainRoutes = [
//     {
//         path: '/',
//         element: <MainLayout />
//     }
// {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//         {
//             path: '/',
//             element: <DashboardDefault />
//         }
// {
//     path: 'color',
//     element: <Color />
// },
// {
//     path: 'dashboard',
//     children: [
//         {
//             path: 'default',
//             element: <DashboardDefault />
//         }
//     ]
// },
// {
//     path: 'sample-page',
//     element: <SamplePage />
// },
// {
//     path: 'shadow',
//     element: <Shadow />
// },
// {
//     path: 'typography',
//     element: <Typography />
// },
// {
//     path: 'icons/ant',
//     element: <AntIcons />
// }
//     ]
// }
// ];
const MainRoutes = () => {
    return useRoutes([
        {
            path: '/dashboard',
            element: <MainLayout />,
            children: [
                {
                    path: '/dashboard',
                    element: <DashboardDefault />
                }
            ]
        }
    ]);
};

export default MainRoutes;
