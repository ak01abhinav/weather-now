"use client";
import { useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        navbar.style.top = "-100px"; // hide
      } else {
        navbar.style.top = "0"; // show
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-logo">🌐 WeatherNow</div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#weather">Weather</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
