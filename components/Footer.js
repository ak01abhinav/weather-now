// components/Footer.js
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        🌐 WeatherNow &copy; {new Date().getFullYear()} — Built with ❤️ by
        Abhinav
      </p>
    </footer>
  );
}
