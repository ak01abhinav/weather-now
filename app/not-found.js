// app/not-found.js
import Link from "next/link";
import "../styles/notfound.css"; // ✅ Correct

export default function NotFound() {
  return (
    <main className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">
        <button>Go Back Home</button>
      </Link>
    </main>
  );
}
