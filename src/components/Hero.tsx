// src/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 leading-tight">
              Le goût authentique du{' '}
              <span className="text-amber-700">pain artisanal</span>
            </h1>
            
            <p className="text-lg text-amber-800 max-w-xl">
              Depuis 1950, nous pétrissons avec passion pour vous offrir 
              les meilleurs pains et viennoiseries de la région.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#products"
                className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors shadow-lg"
              >
                Découvrir nos produits
              </Link>
              <Link
                href="#about"
                className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-colors"
              >
                Notre histoire
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto md:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">70+</div>
                <div className="text-sm text-amber-700">Ans d&apos;expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">50+</div>
                <div className="text-sm text-amber-700">Produits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">100%</div>
                <div className="text-sm text-amber-700">Artisanal</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Remplace par ton image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                <span className="text-6xl">🥖</span>
              </div>
              {/* Quand tu auras l'image, utilise :
              <Image
                src="/images/hero-bread.jpg"
                alt="Pain artisanal"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>

            {/* Badge flottant */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-4 border-amber-100">
              <div className="flex items-center gap-3">
                <span className="text-4xl">⭐</span>
                <div>
                  <div className="text-2xl font-bold text-amber-900">4.9/5</div>
                  <div className="text-sm text-amber-700">+1000 avis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
}