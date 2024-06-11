import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const Drawer = createSlice({
    name: "Drawer",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.isOpen = action.payload;
        },
    },
});

export const { setOpen } = Drawer.actions;

export default Drawer.reducer;