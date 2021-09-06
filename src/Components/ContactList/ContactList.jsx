
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import contactsAction from '../../redux/contacts/contacts-actions';

const ContactList = ({ contacts, onDeleteContact }) => (
    contacts.map(({ id, name, number }) => (
        <ul>
            <li key={id} className={styles.list}>{name}: {number}
            <button onClick ={()=>onDeleteContact(id)}>Delete</button></li>
        </ul>
    ))
);


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};



const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter),
  );
};
  

const mapStateToProps = ({contacts:{items, filter}}) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
onDeleteContact: (id) => dispatch(contactsAction.onDeleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);