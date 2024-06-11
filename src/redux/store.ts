import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/User'
import drawerReducer from './reducers/Drawer'
import { persistReducer, persistStore } from 'redux-persist';

import { reduxStorage } from '../utils/MMKVutil';



const rootReducer = combineReducers({
    user: userReducer,
    drawer: drawerReducer,
    });

    const persistConfig = {
        key: 'root',
        storage: reduxStorage,
        whitelist: ['drawer'],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }),

    });

    export default store;
    export const persistor = persistStore(store);

