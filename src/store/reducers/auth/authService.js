import API_URL from 'utils/api';

// Register user
const register = async (userData) => {
    const response = await API_URL.post(userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

// Login user
const login = async (userData) => {
    const response = await API_URL.post('/users/login', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem('token');
};

const authService = {
    register,
    logout,
    login
};

export default authService;
