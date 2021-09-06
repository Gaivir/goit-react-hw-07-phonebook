import { Component } from "react";
import { connect } from 'react-redux';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import contactsOperations from '../src/redux/contacts/contacts-operations';


class App extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }
 
  render() {

  return (   
  <div>
  <h1>Phonebook</h1>
  <ContactForm />

  <h2>Contacts</h2>
  <Filter/>
      <ContactList />
      
      {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
      
</div>)


} 
}

const mapStateToProps = state => ({
  isLoadingContacts: state.todos.loading,
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);


