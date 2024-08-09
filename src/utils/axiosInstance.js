import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

const baseUrl = "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use(async req => {
    const token = localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : null;
    const refresh_token = localStorage.getItem('refresh') ? JSON.parse(localStorage.getItem('refresh')) : null;

    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
        const user = jwtDecode(token);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) {
            return req;
        } else {
            try {
                const response = await axios.post(`${baseUrl}/auth/token/refresh/`, { refresh: refresh_token });
                if (response.status === 200) {
                    localStorage.setItem('access', JSON.stringify(response.data.access));
                    req.headers.Authorization = `Bearer ${response.data.access}`;
                    return req;
                } else {
                    await axios.post(`${baseUrl}/auth/logout`, { refresh: refresh_token });
                    localStorage.removeItem("user");
                    localStorage.removeItem("access");
                    localStorage.removeItem("refresh");
                }
            } catch (error) {
                console.error("Token refresh failed:", error);
                localStorage.removeItem("user");
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
            }
        }
    }
    return req;
});

export default axiosInstance;