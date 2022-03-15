import styles from "./BottomSection.module.css";

const BottomSection = function ({ data }) {
  return (
    <section className={styles.bottom}>
      <div>
        {data.main ? <p className="bold">{data.main.feels_like}°F</p> : null}
        <p>Feels like</p>
      </div>
      <div>
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        <p>Humidity</p>
      </div>
      <div>
        {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
        <p>Wind</p>
      </div>
    </section>
  );
};

export default BottomSection;
