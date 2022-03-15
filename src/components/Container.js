import styles from "./Container.module.css";

const Container = function ({ children }) {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
