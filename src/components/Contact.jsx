import React, { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server)
    alert(`Thank you, ${name}! Your message has been sent.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full max-w-lg"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full max-w-lg"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 mb-4 w-full max-w-lg"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};


