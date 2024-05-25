import propsTypes from "prop-types";
import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelector, deleteContact } from "../../redux/contactsSlice";
import { filtersSelector } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const search = useSelector(filtersSelector);

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

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
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ContactList.propsTypes = {
  contacts: propsTypes.array.isRequired,
  onDelete: propsTypes.func.isRequired,
};

export default ContactList;
