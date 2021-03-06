import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    onChangeFilter,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError
} from './contacts-actions';


const items = createReducer([], {
    [fetchContactSuccess]: (state, {payload}) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const filter = createReducer('', {
    [onChangeFilter]: (_, {payload}) => payload,
});

const error = createReducer(null, {});


export default combineReducers({
    items,
    filter,
    loading,
    error
});






