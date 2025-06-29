// app/components/Contact.js - STYLED TO MATCH YOUR IMAGE

"use client";

import { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';

export default function Contact({ dict }) {
  // IMPORTANT: Replace with your Telegram username and the email you want to receive messages at.
  const yourTelegramUsername = "tefera_tilahun";
  const yourReceivingEmail = "taodocos1@gmail.com";
  // The corrected line for testing:
//const yourReceivingEmail = "ademyinam2@gmail.com";

  // State for form fields and submission status remains the same
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recipient: yourReceivingEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMessage(dict.success_message || "Thank you! Your message has been sent.");
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage(error.message || (dict.error_message || "Failed to send message. Please try again later."));
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-900/70">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        {/* Title and subtitle match the image style */}
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 dark:text-white mb-4">
          {dict.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 mb-10">
          {dict.subtitle}
        </p>
        
        {/* === THE NEW FORM, STYLED PRECISELY LIKE THE IMAGE === */}
        <form onSubmit={handleSubmit} className="text-left max-w-xl mx-auto space-y-5">
          {/* REMOVED labels and added placeholders for the clean look */}
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder={dict.form_name} 
            required 
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gold-dark transition-all"
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder={dict.form_email} 
            required 
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gold-dark transition-all"
          />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder={dict.form_message} 
            required 
            rows="5" 
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gold-dark transition-all"
          ></textarea>
          
          {/* A functional form needs a submit button. This one is styled to match the theme. */}
          <div className="text-center pt-2">
            <button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed">
              {status === 'sending' ? (
                <>
                  <Loader2 className="mr-3 animate-spin" size={22} />
                  <span>{dict.form_sending}</span>
                </>
              ) : (
                <>
                  <Mail className="mr-3" size={22} />
                  <span>{dict.email_cta}</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Status Messages for user feedback */}
        {status === 'success' && (
          <p className="mt-6 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 py-3 px-4 rounded-lg">{responseMessage}</p>
        )}
        {status === 'error' && (
          <p className="mt-6 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 py-3 px-4 rounded-lg">{responseMessage}</p>
        )}
        
        {/* Divider and secondary Telegram CTA remain */}
        <div className="my-12 flex items-center justify-center">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400 font-serif">{dict.or}</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        <a
          href={`https://t.me/${yourTelegramUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <Send className="mr-3" size={22} />
          <span>{dict.telegram_cta}</span>
        </a>
      </div>
    </section>
  );
}