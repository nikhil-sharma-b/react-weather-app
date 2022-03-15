import { forwardRef } from "react";
import styles from "./LocationInput.module.css";

const LocationInput = forwardRef(function (
  { onSearchSubmit, onInputChange, value },
  ref
) {
  return (
    <form onSubmit={onSearchSubmit} className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter City"
        value={value}
        // value=""
        onChange={onInputChange}
        ref={ref}
      />
    </form>
  );
});

export default LocationInput;
