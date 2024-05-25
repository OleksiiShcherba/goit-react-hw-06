import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, filtersSelector } from "../../redux/filtersSlice";
import propsTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const searchField = useSelector(filtersSelector);

  return (
    <div className={css.searchBlock}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        id={searchId}
        value={searchField}
        onChange={(event) => dispatch(changeFilter(event.currentTarget.value))}
      ></input>
    </div>
  );
};

SearchBox.propsTypes = {
  searchField: propsTypes.string.isRequired,
  searchChange: propsTypes.func.isRequired,
};

export default SearchBox;
