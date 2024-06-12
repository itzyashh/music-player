import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite: [],
    loading: false,
    error: null,
};

const Favorite = createSlice({
    name: "Favorite",
    initialState,
    reducers: {
        setFavorite: (state, action) => {
            state.favorite = action.payload;
        },
        addFavorite: (state, action) => {
            // Check if the item is already in the favorite list
            const index = state.favorite.findIndex((item) => item.id === action.payload.id);
            if (index >= 0) {
                console.log('Item already in favorite list');
                return;
            }
            state.favorite.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorite = state.favorite.filter((item) => item.id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setReset: (state) => {
            state.favorite = [];
            state.loading = false;
            state.error = null;
        }
    },
});

export const { setFavorite, setLoading, setError, addFavorite, removeFavorite, setReset } = Favorite.actions;

export default Favorite.reducer;