"use client";
import { useState } from "react";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/weather.css";
import "../styles/contact.css";

export default function HomePage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city) return setError("Please enter a city name.");
    try {
      setError("");
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main>
      {/* Home Section */}
      <section id="home" className="home-container">
        <h1 className="home-title">Welcome to WeatherNow</h1>
        <p className="home-subtext">
          Get real-time weather updates for any city around the world.
        </p>
        <div className="home-buttons">
          <a href="#weather">
            <button className="check-btn">Check Weather</button>
          </a>
          <a href="#contact">
            <button className="contact-btn">Contact Us</button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-container">
        <h1 className="about-title">About WeatherNow</h1>
        <p className="about-text">
          WeatherNow is a lightweight and responsive weather app that provides
          real-time weather information powered by the OpenWeatherMap API.
          Whether you&apos;re planning a trip or just curious about the climate
          in another city — WeatherNow has you covered.
        </p>

        <p className="about-text">
          The goal of WeatherNow is not just to provide weather updates, but to
          also serve as a clean, simple, and minimalistic project built using
          modern web tools like Next.js. This app is designed and developed by
          Abhinav as part of a focused learning path.
        </p>
      </section>

      <section id="weather" className="weather-container">
        <div className="weather-box">
          <h1 className="weather-title">Check the Weather</h1>
          <div className="weather-search">
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {weather && (
            <div className="weather-result">
              <h2>
                {weather.name}, {weather.sys.country}
              </h2>
              <p>
                {weather.weather[0].main} - {weather.weather[0].description}
              </p>
              <p>🌡️ {weather.main.temp} °C</p>
              <p>💧 Humidity: {weather.main.humidity}%</p>
              <p>🌬️ Wind: {weather.wind.speed} m/s</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p>
          Have questions or feedback about our weather service? Get in touch
          with us using the form below.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleFormChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleFormChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
