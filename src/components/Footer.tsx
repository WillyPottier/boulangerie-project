// src/components/Footer.tsx
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-amber-50">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">🥖 La Boulangerie</h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              Votre boulangerie artisanale de confiance depuis 1950. 
              Qualité et tradition au service de votre gourmandise.
            </p>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Clock size={20} />
              Horaires
            </h4>
            <ul className="space-y-2 text-sm text-amber-200">
              <li>Lundi - Vendredi</li>
              <li className="font-semibold text-white">7h00 - 20h00</li>
              <li className="mt-3">Samedi - Dimanche</li>
              <li className="font-semibold text-white">7h00 - 19h00</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-amber-200">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>123 Rue du Pain<br />75001 Paris</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:text-white transition-colors">
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:contact@boulangerie.fr" className="hover:text-white transition-colors">
                  contact@boulangerie.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-amber-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Nos produits
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-amber-200">
              © {currentYear} La Boulangerie. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>

            <div className="flex gap-4 text-xs text-amber-200">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <span className="text-amber-700">•</span>
              <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Badge "Made with love" */}
      <div className="bg-amber-950 py-3">
        <p className="text-center text-xs text-amber-300">
          Fait avec ❤️ par des artisans passionnés
        </p>
      </div>
    </footer>
  );
}