import { useState } from "react";
import LocalHost from "../api/LocalHost";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const res = await LocalHost.post('/user/login', {email, password});
            setUser(res.data);
            setError('');
        } catch (err) {
            setError('Something went wrong');
        }
        setLoading(false);
    }

    return {login, loading, error, user};
}

export default useLogin;