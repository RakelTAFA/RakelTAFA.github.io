import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Rakel TAFA</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Qui suis-je ?</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Mes projets</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </nav>
    </header>
  );
}