import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menuItem: [],
}

export const menuItemSlice = createSlice({
    name: 'MenuItem',
    initialState: initialState,
    reducers: {
        setMenuItems: (state, action) => {
            state.menuItem = action.payload
        }
    }
})

export const {setMenuItems} = menuItemSlice.actions;
export const menuItemReducer = menuItemSlice.reducer;

