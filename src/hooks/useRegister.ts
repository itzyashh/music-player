import { useState } from "react";
import LocalHost from "../api/LocalHost";

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const register = async (email: string, password: string, name: string) => {
        setLoading(true);
        try {
            const res = await LocalHost.post('/user/create', {email, password, name});
            setUser(res.data);
            setError('');
        } catch (err) {
            setError('Something went wrong');
        }
        setLoading(false);
    }

    return {register, loading, error, user};

}

export default useRegister;