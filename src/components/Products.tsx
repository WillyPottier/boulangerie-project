// src/components/Products.tsx
'use client';

import { useState } from 'react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'bread', label: 'Pains' },
    { id: 'pastry', label: 'Viennoiseries' },
    { id: 'special', label: 'Spécialités' },
  ];

  const products = [
    {
      id: 1,
      name: 'Baguette Tradition',
      category: 'bread',
      price: '1,20€',
      description: 'La baguette française par excellence',
      emoji: '🥖',
    },
    {
      id: 2,
      name: 'Pain de campagne',
      category: 'bread',
      price: '3,50€',
      description: 'Au levain naturel, mie dense et savoureuse',
      emoji: '🍞',
    },
    {
      id: 3,
      name: 'Croissant au beurre',
      category: 'pastry',
      price: '1,40€',
      description: 'Pur beurre AOP, feuilletage croustillant',
      emoji: '🥐',
    },
    {
      id: 4,
      name: 'Pain au chocolat',
      category: 'pastry',
      price: '1,50€',
      description: 'Chocolat noir 70% de cacao',
      emoji: '🍫',
    },
    {
      id: 5,
      name: 'Brioche tressée',
      category: 'special',
      price: '4,80€',
      description: 'Moelleuse et parfumée à la vanille',
      emoji: '🧈',
    },
    {
      id: 6,
      name: 'Éclair au café',
      category: 'special',
      price: '3,20€',
      description: 'Crème pâtissière au café arabica',
      emoji: '☕',
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wide">
            Notre carte
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">
            Découvrez nos produits
          </h2>
          <p className="text-lg text-gray-600">
            Fabriqués chaque jour avec des ingrédients de qualité premium
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-700 text-white shadow-lg'
                  : 'bg-white text-amber-900 hover:bg-amber-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille de produits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-7xl">{product.emoji}</span>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-amber-900 flex-1">
                    {product.name}
                  </h3>
                  <span className="text-amber-700 font-bold text-lg ml-2">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <button className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition-colors font-medium">
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <button className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-colors">
            Voir toute la carte
          </button>
        </div>
      </div>
    </section>
  );
}