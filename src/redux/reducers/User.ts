import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    loading: false,
    error: null,
    };

    const User = createSlice({
        name: "User",
        initialState,
        reducers: {
            setUser: (state, action) => {
                state.user = action.payload;
            },
            setLoading: (state, action) => {
                state.loading = action.payload;
            },
            setError: (state, action) => {
                state.error = action.payload;
            },
            setReset: (state) => {
                state.user = null;
                state.loading = false;
                state.error = null;
            }
        },
    });

    export const { setUser, setLoading, setError } = User.actions;

    export default User.reducer;

