import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { menuItemReducer} from './menuItemSlice'
import { shoppingCartReducer } from './shoppingCartSlice';
import { menuItemApi } from '../../apis';
import { shoppingCartApi } from '../../apis/shoppingCartAPI';
import { userAuthenAPI } from '../../apis/userAuthenAPI';
import { userAuthenReducer } from './userAuthenSlice';
import { menuItemsSearchReducer } from './menuItemsSearchSlice';
 const store = configureStore({
reducer: {
    menuItemStore: menuItemReducer,
    shoppingCartStore: shoppingCartReducer,
    [menuItemApi.reducerPath] : menuItemApi.reducer, //menuItemApi.reducer is likely the automatically-generated reducer function that manages the state for this API.
    [shoppingCartApi.reducerPath] : shoppingCartApi .reducer,
    [userAuthenAPI.reducerPath] : userAuthenAPI.reducer,
    userAuthenStore: userAuthenReducer,
    menuItemsSearchStore: menuItemsSearchReducer

},
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuItemApi.middleware).concat(shoppingCartApi.middleware).concat(userAuthenAPI.middleware)
//middleware to handle asynchronous logic related to fetching and handling API data
//automatically dispatch the appropriate actions when API requests succeed or fail. This makes it easier to handle asynchronous logic related to fetching and handling API data within the Redux store.
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
