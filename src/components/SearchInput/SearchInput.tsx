import React, { useCallback, useState } from "react";
import { Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { filterCards, enableLoading } from "@redux/cardsSlice";
import styles from "./SearchInput.module.scss";

const PLACEHOLDER_TEXT = "Type any keyword";

const SearchInput: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getResultDebounced = useCallback(debounce(dispatch, 300), []);

  const handleChange = (e: any) => {
    const { value } = e.target;

    setSearchText(value);
    dispatch(enableLoading());
    getResultDebounced(filterCards(value));
  };

  return (
    <div>
      <span className={styles.search_label}>Search</span>
      <Input
        placeholder={PLACEHOLDER_TEXT}
        onChange={handleChange}
        value={searchText}
        colorScheme="grey"
        style={{ color: "white", padding: "7px 4px 5px 8px" }}
      />
    </div>
  );
};

export default SearchInput;
