import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';


const items = createReducer([], {
    [actions.formSubmitHandler]: (state, { payload }) => [...state, payload],
    [actions.onDeleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [actions.onChangeFilter]: (_, {payload}) => payload,
});



export default combineReducers({
    items,
    filter,
});






