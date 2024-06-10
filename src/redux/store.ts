import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/User'
import { persistReducer, persistStore } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';
import { reduxStorage } from '../utils/MMKVutil';



const rootReducer = combineReducers({
    user: userReducer,
    // Add more reducers here
    });

    const persistConfig = {
        key: 'root',
        storage: reduxStorage,
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

