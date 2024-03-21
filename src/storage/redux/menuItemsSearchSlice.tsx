import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menuItem: [],
}

export const menuItemsSearchSlice = createSlice({
    name: 'MenuItem',
    initialState: initialState,
    reducers: {
        setMenuItemsSearch: (state, action) => {
            state.menuItem = action.payload
        }
    }
})

export const {setMenuItemsSearch} = menuItemsSearchSlice.actions;
export const menuItemsSearchReducer = menuItemsSearchSlice.reducer;

