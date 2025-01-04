import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_xfo4axi',
      'template_portfolio',
      formData,
      'WF2Onv7l4ygi_hxgv'
    )
      .then(
        () => {
          alert('Message envoyé avec succès !');
        },
        () => {
          alert('Un problème est survenu, veuillez réessayer...');
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4 lg:space-y-2">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">rakeltafa.pro@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-green-500" />
              <div>
                <h3 className="font-semibold">Téléphone</h3>
                <p className="text-gray-600">+33 6 25 25 26 92</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="font-semibold">Localisation</h3>
                <p className="text-gray-600">Bourg-en-Bresse, France</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Envoyer</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}