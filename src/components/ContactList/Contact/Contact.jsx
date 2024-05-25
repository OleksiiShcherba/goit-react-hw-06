import propsTypes from "prop-types";
import css from "./Contact.module.css";
import { deleteContact } from "../../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactElement}>
      <ul className={css.dataList}>
        <li className={css.name}>{name}</li>
        <li className={css.phone}>{phone}</li>
      </ul>
      <button className={css.deleteAction} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propsTypes = {
  name: propsTypes.string.isRequired,
  phone: propsTypes.string.isRequired,
};

export default Contact;
