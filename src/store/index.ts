import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './reducer/authReducer';
import {categoryReducer} from './reducer/categoryReducer';

export const redux_store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoryReducer,
  },
});
