"use client"; // Ensures client-side rendering

import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

export default function ApiTester() {
  const [currencyPair, setCurrencyPair] = useState("GBP_AUD");
  const [exchangeRate, setExchangeRate] = useState(null);

  const [muscle, setMuscle] = useState("biceps");
  const [exerciseData, setExerciseData] = useState([]);

  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const API_KEY = "mdxug0LmaFudtt7E/mL93Q==RI8rHcdU9g2cFQUj";

  // Fetch Exchange Rate
  const fetchExchangeRate = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exchangerate?pair=${currencyPair}`,
        { headers: { "X-Api-Key": API_KEY } }
      );
      setExchangeRate(response.data);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Exercises
  const fetchExercises = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
        { headers: { "X-Api-Key": API_KEY } }
      );
      setExerciseData(response.data);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Weather
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/weather?city=${city}`,
        { headers: { "X-Api-Key": API_KEY } }
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>My Professional Portfolio</title>
        <meta name="description" content="Professional portfolio website showcasing projects and blogs." />
        <meta name="keywords" content="Portfolio, Web Development, APIs, Next.js" />
        <meta name="author" content="Ingrid Canola" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Lato:400,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous" defer></script>
      </Head>

      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand" href="#page-top">
            Final Project
          </Link>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <header className="page-section-heading text-center text-uppercase text-secondary mb-0">
      <div style={styles.container}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <h1 style={styles.title}>APIs Examples</h1>

      {/* Exchange Rate Section */}
      <div style={styles.section}>
        <h2>Exchange Rate</h2>
        <input
          style={styles.input}
          type="text"
          value={currencyPair}
          onChange={(e) => setCurrencyPair(e.target.value)}
          placeholder="Currency Pair (e.g., GBP_AUD)"
        />
        <button onClick={fetchExchangeRate} style={styles.button}>
          Fetch Exchange Rate
        </button>
        {loading && <p style={styles.loading}>Loading...</p>}
        {exchangeRate && (
          <p style={styles.result}>
            Exchange Rate: <strong>{exchangeRate.exchange_rate}</strong>
          </p>
        )}
      </div>

      {/* Exercises Section */}
      <div style={styles.section}>
        <h2>Exercises</h2>
        <input
          style={styles.input}
          type="text"
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
          placeholder="Muscle Group (e.g., biceps)"
        />
        <button onClick={fetchExercises} style={styles.button}>
          Fetch Exercises
        </button>
        {loading && <p style={styles.loading}>Loading...</p>}
        {exerciseData.length > 0 && (
          <ul style={styles.list}>
            {exerciseData.map((exercise, index) => (
              <li key={index} style={styles.listItem}>
                <strong>{exercise.name}</strong>: {exercise.instructions}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Weather Section */}
      <div style={styles.section}>
        <h2>Weather</h2>
        <input
          style={styles.input}
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City (e.g., London)"
        />
        <button onClick={fetchWeather} style={styles.button}>
          Fetch Weather
        </button>
        {loading && <p style={styles.loading}>Loading...</p>}
        {weatherData && (
          <p style={styles.result}>
            Temperature: <strong>{weatherData.temp}°C</strong>, Condition:{" "}
            <strong>{weatherData.condition}</strong>
          </p>
        )}
      </div>
      <p></p>
          <Link href="/">Back to Home</Link>
    </div>
      </header>
    
    </>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#495057",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#2c3e50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  loading: {
    color: "#555",
    fontStyle: "italic",
  },
  result: {
    fontSize: "18px",
    marginTop: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    marginTop: "10px",
  },
  listItem: {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
};
