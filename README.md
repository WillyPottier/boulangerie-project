# 🥖 La Boulangerie - Site Vitrine

Site web moderne pour boulangerie artisanale, développé avec Next.js 15, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités

- 🎨 Design moderne et responsive
- ⚡ Performance optimale avec Next.js
- 📱 Mobile-first
- 🎭 Animations fluides
- 🔍 SEO optimisé
- 🐳 Docker ready

## 🛠️ Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel / Railway
- **Container**: Docker

## 📦 Installation

### Prérequis

- Node.js 22+ (tu as déjà v22.18.0 ✅)
- npm ou yarn
- Git

### 1. Créer le projet

```bash
npx create-next-app@latest boulangerie-project
```

**Répondre aux prompts :**
- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- `src/` directory: **Yes**
- App Router: **Yes**
- Import alias: **No** (garder par défaut)

### 2. Aller dans le dossier

```bash
cd boulangerie-project
```

### 3. Installer shadcn/ui

```bash
npx shadcn@latest init
```

**Répondre :**
- Style: **Default**
- Base color: **Slate**
- CSS variables: **Yes**

### 4. Ajouter les composants shadcn

```bash
npx shadcn@latest add button card
```

### 5. Installer les dépendances supplémentaires

```bash
npm install lucide-react
```

## 📂 Structure du Projet

```
boulangerie-project/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── globals.css         # Styles globaux
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/                 # Composants shadcn
│   │   ├── Header.tsx          # Navigation
│   │   ├── Hero.tsx            # Section hero
│   │   ├── About.tsx           # À propos
│   │   ├── Products.tsx        # Produits
│   │   └── Footer.tsx          # Pied de page
│   └── lib/
│       └── utils.ts            # Utilitaires
├── public/
│   └── images/                 # Tes images ici
├── Dockerfile
├── docker-compose.yml
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Démarrage

### Mode développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

### Mode production

```bash
npm run build
npm start
```

## 🐳 Docker

### Build l'image

```bash
docker build -t boulangerie-app .
```

### Run avec Docker

```bash
docker run -p 3000:3000 boulangerie-app
```

### Avec Docker Compose

```bash
docker-compose up
```

Pour arrêter :
```bash
docker-compose down
```

## 🌐 Déploiement

### Sur Vercel (Recommandé pour Next.js)

#### Méthode 1: Via GitHub

1. Push ton code sur GitHub
2. Va sur [vercel.com](https://vercel.com)
3. Connecte ton repo
4. Clique "Deploy"
5. C'est fait ! ✨

#### Méthode 2: Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

Suis les instructions à l'écran.

### Sur Railway

1. Connecte ton GitHub à [railway.app](https://railway.app)
2. Nouveau projet → Deploy from GitHub
3. Sélectionne ton repo
4. Railway détecte Next.js automatiquement
5. Deploy ! 🚀

## 🎨 Personnalisation

### Couleurs

Modifie `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    cream: '#FFF8DC',
    beige: '#F5E6D3',
    brown: '#8B4513',
    gold: '#D4AF37',
  }
}
```

### Police

Dans `src/app/layout.tsx`, change :

```typescript
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'] 
});
```

### Images

Ajoute tes images dans `/public/images/` et utilise :

```tsx
<Image
  src="/images/ton-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

## 📝 TODO / Évolutions Futures

- [ ] Ajouter page Contact avec formulaire
- [ ] Système de commande en ligne
- [ ] Intégration Google Maps
- [ ] Blog / Actualités
- [ ] Espace client
- [ ] Multi-langues (FR/EN)
- [ ] Mode sombre
- [ ] Animations avancées (Framer Motion)

## 🔧 Scripts Disponibles

```bash
npm run dev          # Développement
npm run build        # Build production
npm run start        # Démarre le serveur prod
npm run lint         # Vérifie le code
npm run type-check   # Vérifie TypeScript
```

## 🐛 Résolution de Problèmes

### Port 3000 déjà utilisé

```bash
npx kill-port 3000
# ou change le port
PORT=3001 npm run dev
```

### Erreur de cache

```bash
rm -rf .next
npm run dev
```

### Modules manquants

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erreur Tailwind

Vérifie que `globals.css` contient :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📚 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Vercel Deployment](https://vercel.com/docs)

## 👨‍💻 Auteur

Développé avec ❤️ et beaucoup de café ☕

## 📄 Licence

MIT - Libre d'utilisation pour tes projets personnels et commerciaux

---