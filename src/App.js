import { Route, useNavigate } from 'react-router-dom';
// project import
// import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import Login from 'pages/authentication/Login';
import MainRoutes from 'routes/MainRoutes';
import DashboardDefault from 'pages/dashboard/index';
import MainLayout from 'layout/MainLayout/index';
import { useEffect } from 'react';
import ThemeRoutes from 'routes/index';

// import Routes from './routes';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     // check for token in LS
    //     if (window.localStorage.user) {
    //         setAuthToken(window.localStorage.user);
    //         navigate('/dashboard');
    //     }
    //     // log user out from all tabs if they log out in one tab
    //     // window.addEventListener('storage', () => {
    //     //     if (!localStorage.token) store.dispatch({ type: LOGOUT });
    //     // });
    // }, []);
    return (
        <ThemeCustomization>
            <ScrollTop>
                {/* <Routes>
                    <Route exact path="/" element={<Login />} />
                </Routes>
                <MainRoutes /> */}
                <ThemeRoutes />
            </ScrollTop>
        </ThemeCustomization>
    );
};

export default App;
