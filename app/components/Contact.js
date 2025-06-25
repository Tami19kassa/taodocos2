import { Mail, Send } from 'lucide-react';

export default function Contact({ dict }) {
  // IMPORTANT: Replace with your actual email and Telegram username
  const yourEmail = "taodocos1@gmail.com";
  const yourTelegramUsername = "tefera_tilahun";

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-900/70">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 dark:text-white mb-4">
          {dict.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 mb-10">
          {dict.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={`mailto:${yourEmail}`}
            className="flex items-center justify-center bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Mail className="mr-3" size={22} />
            <span>{dict.email_cta}</span>
          </a>
          <a
            href={`https://t.me/${yourTelegramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Send className="mr-3" size={22} />
            <span>{dict.telegram_cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}