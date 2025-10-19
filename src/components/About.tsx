// src/components/About.tsx
import { Heart, Award, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Chaque pain est pétri avec amour et savoir-faire traditionnel',
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Ingrédients sélectionnés et recettes authentiques depuis 1950',
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Une équipe à votre écoute pour vous servir au quotidien',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wide">
            Notre histoire
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">
            Une tradition familiale depuis 3 générations
          </h2>
          <p className="text-lg text-gray-600">
            Fondée en 1950 par Jean Dupont, notre boulangerie perpétue l&apos;art du pain
            traditionnel français. Aujourd&apos;hui, c&apos;est toujours la même passion qui
            nous anime chaque matin.
          </p>
        </div>

        {/* Valeurs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-amber-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 rounded-full mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Image + Texte */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            {/* Placeholder - remplace par ton image */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center">
              <span className="text-8xl">👨‍🍳</span>
            </div>
            {/* Quand tu auras l'image :
            <Image
              src="/images/baker.jpg"
              alt="Notre boulanger"
              fill
              className="object-cover"
            />
            */}
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-900">
              Le secret d&apos;un bon pain ? Le temps et l&apos;amour
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Chaque matin à 4h, nos boulangers commencent leur journée pour vous 
              offrir du pain frais. Nous utilisons uniquement des farines de qualité, 
              du levain naturel et respectons les temps de fermentation traditionnels.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Notre engagement : zéro additif, 100% artisanal, et toujours ce goût 
              authentique qui fait notre réputation depuis plus de 70 ans.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-5xl">✨</div>
              <div>
                <div className="font-bold text-amber-900">Pierre Dupont</div>
                <div className="text-sm text-gray-600">Maître boulanger - 3ème génération</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}