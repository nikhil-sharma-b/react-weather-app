import styles from "./TopSection.module.css";

const TopSection = function ({ data }) {
  return (
    <section className={styles.top}>
      <div>
        <p>{data.name}</p>
      </div>
      <div>{data.main ? <h1>{data.main.temp}°F</h1> : null}</div>
      <div className={`${styles.description} bold`}>
        {data.weather ? <p>{data.weather[0].main}</p> : null}
      </div>
    </section>
  );
};

export default TopSection;
