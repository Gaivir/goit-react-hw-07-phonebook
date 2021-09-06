import { Component } from "react";
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';

class App extends Component {
 
  render() {

  return (   
  <div>
  <h1>Phonebook</h1>
  <ContactForm />

  <h2>Contacts</h2>
  <Filter/>
  <ContactList />
</div>)


} 
}

export default App;


