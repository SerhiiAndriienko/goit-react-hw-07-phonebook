import css from './App.module.css';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import ContactForm from './contactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { setFilterSlice } from 'redux/filterSlice/filterSlice';

export default function App() {
  const dispatch = useDispatch();
  const filterChange = filterValue => {
    dispatch(setFilterSlice(filterValue));
  };
  return (
    <>
      <div className={css.contactsForm}>
        <h1>Phonebook</h1>
        <h2>Contacts</h2>
        <ContactForm></ContactForm>
      </div>
      <div className={css.contactsList}>
        <Filter filterChange={filterChange}></Filter>
        <ContactList></ContactList>
      </div>
    </>
  );
}
