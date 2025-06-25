export default function Footer({ dict }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {currentYear} {dict.copyright}</p>
      </div>
    </footer>
  );
}