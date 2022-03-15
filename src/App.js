import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import { fetchWeatherData } from "./lib/api";

import LocationInput from "./components/LocationInput";
import Container from "./components/Container";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";

function App() {
  const [receivedData, setReceivedData] = useState({});
  const [location, setLocation] = useState("");
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputChangeHandler = (event) => {
    setLocation(event.target.value);
    // setLocation(inputRef.current.value);
  };

  const submitSearchHandler = async (event) => {
    event.preventDefault();
    const data = await fetchWeatherData(location);
    // Allows the data received from the api to be accessible outside
    setReceivedData(data);
    setLocation("");
  };

  return (
    <main className={styles.app}>
      <LocationInput
        onSearchSubmit={submitSearchHandler}
        onInputChange={inputChangeHandler}
        value={location}
        ref={inputRef}
      />
      <Container>
        <TopSection data={receivedData} />
        {receivedData.name !== undefined && (
          <BottomSection data={receivedData} />
        )}
      </Container>
    </main>
  );
}

export default App;
