import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";
import { useSelector } from "react-redux";
import { contactsSelector } from "../../redux/contactsSlice";
import { filtersSelector } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const search = useSelector(filtersSelector);

  const getFiltratedList = () => {
    const searchableLine = search?.toLowerCase();
    if (searchableLine) {
      return contacts.filter((contact) => {
        return contact?.name.toLowerCase().includes(searchableLine);
      });
    } else {
      return contacts;
    }
  };

  return (
    <ul className={css.contactList}>
      {getFiltratedList().map((contact) => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phone={contact.number}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
