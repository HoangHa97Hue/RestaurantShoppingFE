import { createSlice } from '@reduxjs/toolkit'
import { userModel } from '../../interfaces';

const initialState:userModel = {
    email: "",
    fullName: "",
    role: "",
    id: ""
}

export const userAuthenSlice = createSlice({
    name: 'userAuthen',
    initialState: initialState,
    reducers: {
        setUserInformation: (state, action) => {
            state.email = action.payload.email,
            state.fullName = action.payload.fullName,
            state.role = action.payload.role,
            state.id = action.payload.id
        }
    }
})

export const {setUserInformation} = userAuthenSlice.actions;
export const userAuthenReducer = userAuthenSlice.reducer;