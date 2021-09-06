import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';




const formSubmitHandler = createAction('contacts/add', (name, number) => ({
        payload: { id: shortid.generate(), name, number },

}));


const onDeleteContact = createAction('contacts/delete');
const onChangeFilter = createAction('contacts/changeFilter');



export default { formSubmitHandler, onDeleteContact, onChangeFilter };


