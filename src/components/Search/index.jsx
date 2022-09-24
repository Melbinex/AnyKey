import React from 'react';
import styles from './Search.module.scss';
const Search = ({ searchValue, setSearchValue }) => {
  return <input className={styles.root} placeholder="🔎  Find keyboard" type="text" />;
};
export default Search;
